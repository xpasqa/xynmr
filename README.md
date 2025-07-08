# XYNMR — Yanmar Inspection & NCR Management Platform

**XYNMR** is a lightweight, modular web-based application developed to streamline inspection procedures, Non-Conformance Report (NCR) tracking, and parts data management at PT X. Built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**, the platform emphasizes simplicity, performance, and seamless user experience.

> ⚠️ **Status:** This is an ongoing project. Features and UI are actively being developed and refined. Expect frequent updates and structural improvements.

---

## 📌 Purpose

This system is designed to support engineering, quality assurance, and production teams by centralizing checksheet documentation and NCR workflows into a unified interface. It enhances visibility, accountability, and traceability across the inspection lifecycle.

---

## 🔍 Key Features

- **Dynamic Part Entry Form**  
  Structured forms allow for clear input of key metadata including Type, Model, Part Number, Document Reference, and Revisions.

- **Approval Workflow Table**  
  Built-in grid layout supports multi-role endorsement fields: Approval, Checked, In Charge, and Inspect roles.

- **Real-time Data Table**  
  Tabulated Part Data Items with action controls for edit/delete. Additional rows can be appended dynamically.

- **Visual Upload Support**  
  Upload button for supplementary image attachments with clear instructional prompts.

- **Custom Inspection Matrix**  
  Dynamic inspection table supporting deviation tracking, standard measurements, axis indicators, and multi-code compliance checks.

- **Responsive Sidebar Navigation**  
  Left navigation panel with dropdowns for "NCR", "Checksheet Report", and "4M Exchange", including togglable visibility.

- **Modular Component Architecture**  
  `header.js` and `sidebar.js` scripts allow reusable UI injection across different HTML pages.

- **Mobile-Responsive Design**  
  Layouts adapt gracefully to various screen sizes using Tailwind’s utility-first responsiveness.
