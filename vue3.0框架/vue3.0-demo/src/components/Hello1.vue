<template>
  <div class="login-form-container">
    <h2 class="form-title">{{ title }}</h2>
    
    <!-- 表单区域 -->
    <form @submit.prevent="handleSubmit" class="login-form">
      <!-- 用户名输入 -->
      <div class="form-group">
        <label for="username" class="form-label">用户名</label>
        <input 
          type="text" 
          id="username" 
          class="form-input"
          v-model.trim="formData.username"
          @input="validateUsername"
          :class="{'input-error': usernameError}"
          placeholder="请输入用户名"
          autocomplete="username"
        >
        <div v-if="usernameError" class="error-message">{{ usernameError }}</div>
      </div>
      
      <!-- 密码输入 -->
      <div class="form-group">
        <label for="password" class="form-label">密码</label>
        <div class="password-container">
          <input 
            :type="showPassword ? 'text' : 'password'"
            id="password" 
            class="form-input"
            v-model.trim="formData.password"
            @input="validatePassword"
            :class="{'input-error': passwordError}"
            placeholder="请输入密码"
            autocomplete="current-password"
          >
          <span 
            class="password-toggle" 
            @click="showPassword = !showPassword"
            :title="showPassword ? '隐藏密码' : '显示密码'"
          >
            {{ showPassword ? '👁️' : '👁️‍🗨️' }}
          </span>
        </div>
        <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
      </div>
      
      <!-- 提交按钮 -->
      <button 
        type="submit" 
        class="submit-btn"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? '提交中...' : '登录' }}
      </button>
    </form>
    
    <!-- 演示信息（实际项目中应移除） -->
    <div class="demo-info" v-if="isDevelopment">
      <h3>输入预览</h3>
      <p>用户名: {{ formData.username || "未输入" }}</p>
      <p>密码: {{ formData.password ? formData.password.replace(/./g, '*') : "未输入" }}</p>
      <p v-if="error" class="error-message">错误信息: {{ error }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    title: {
      type: String,
      default: "用户登录"
    }
  },
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      showPassword: false,
      usernameError: "",
      passwordError: "",
      error: "",
      isSubmitting: false,
      isDevelopment: process.env.NODE_ENV === "development" // 仅在开发环境显示预览
    };
  },

  methods: {
    // 验证用户名
    validateUsername() {
      if (!this.formData.username) {
        this.usernameError = "用户名不能为空";
        return false;
      }
      
      if (this.formData.username.length < 3) {
        this.usernameError = "用户名至少需要3个字符";
        return false;
      }
      
      this.usernameError = "";
      return true;
    },
    
    // 验证密码
    validatePassword() {
      if (!this.formData.password) {
        this.passwordError = "密码不能为空";
        return false;
      }
      
      if (this.formData.password.length < 6) {
        this.passwordError = "密码长度至少需要6位";
        return false;
      }
      
      this.passwordError = "";
      return true;
    },
    
    // 提交表单
    async handleSubmit() {
      // 验证表单
      const isUsernameValid = this.validateUsername();
      const isPasswordValid = this.validatePassword();
      
      if (!(isUsernameValid && isPasswordValid)) {
        this.error = "请检查表单输入";
        return;
      }
      
      // 防止重复提交
      this.isSubmitting = true;
      this.error = "";
      
      try {
        // 在实际项目中，这里应该发送API请求
        // 示例：const response = await this.$axios.post('/login', this.formData);
        
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('登录提交数据:', {
          username: this.formData.username,
          password: '***' // 实际中永远不要记录密码
        });
        
        // 提交成功后重置表单
        this.resetForm();
        
        // 触发成功事件
        this.$emit('login-success', { 
          username: this.formData.username 
        });
        
      } catch (err) {
        // 处理错误
        this.error = "登录失败，请重试";
        console.error('登录失败:', err);
      } finally {
        this.isSubmitting = false;
      }
    },
    
    // 重置表单
    resetForm() {
      this.formData = {
        username: "",
        password: ""
      };
      this.usernameError = "";
      this.passwordError = "";
      this.error = "";
    }
  }
};
</script>

<style scoped>
.login-form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
  font-weight: 600;
}

.login-form {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #34495e;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  font-size: 15px;
  transition: all 0.3s;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
  outline: none;
}

.input-error {
  border-color: #ff6b6b;
}

.input-error:focus {
  box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
}

.error-message {
  margin-top: 5px;
  font-size: 14px;
  color: #ff6b6b;
}

.password-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  user-select: none;
}

.submit-btn {
  width: 100%;
  padding: 12px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #3aa874;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.demo-info {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 6px;
  margin-top: 25px;
}

.demo-info h3 {
  margin-top: 0;
  font-size: 16px;
  color: #7f8c8d;
}
</style>