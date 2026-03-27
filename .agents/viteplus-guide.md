# Vite+ Guide

Date Scraped: 2026-03-26

Source: https://viteplus.dev/guide/

## Introduction

Vite+ is the unified toolchain and entry point for web development. It manages your runtime, package manager, and frontend toolchain in one place by combining Vite, Vitest, Oxlint, Oxfmt, Rolldown, tsdown, and Vite Task.
Vite+ ships in two parts: `vp`, the global command-line tool, and `vite-plus`, the local package installed in each project. If you already have a Vite project, use `vp migrate` to migrate it to Vite+.

## Available Commands

For a full list of commands, core utilities, and instructions on managing the local frontend development cycle, **run `vp help` in the terminal**.

**Note on Custom Scripts:**
Vite+ ships with many predefined commands such as `vp build`, `vp test`, and `vp dev`. These commands are built in and cannot be changed. If you want to run a command from your `package.json` scripts, use `vp run <command>`.
