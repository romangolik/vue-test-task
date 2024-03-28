<template>
  <div class="login-page df aic jcc">
    <div className="login-page__content">
      <h1 class="login-page__title">Login</h1>
      <form @submit="onSubmit" class="df fdc gap20">
        <EmailField />
        <PasswordField />
        <Button>Submit</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";

import { login, LoginType } from "@/services/auth";

import Button from "@/components/Button";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";

import { Routes } from "@/router/routes";

const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required("Обов'язкове поле")
      .email("Невірний формат пошти"),
    password: yup
      .string()
      .required("Обов'язкове поле")
      .min(8, "Пароль має бути не менше 8 символів"),
  }),
});

const onSubmit = handleSubmit((values) => {
  login(values as LoginType);
  router.push(Routes.users());
});
</script>

<style scoped lang="sass">
@import "./Login.scss"
</style>
