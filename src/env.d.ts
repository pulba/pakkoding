/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      id: string;
      email: string;
      name: string;
      avatar: string;
      completed_lessons: string[];
    };
  }
}
