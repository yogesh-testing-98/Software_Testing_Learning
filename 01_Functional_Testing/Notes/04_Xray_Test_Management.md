# Xray Test Management in Jira

## Course Section

**Section 5: Understand Test Case Design Format and Document Them in Jira Through Xray Plugin**

### Videos Covered

- Lecture 22 – Test Scenario vs Test Case vs Test Steps vs Preconditions
- Lecture 23 – Introduction to Xray App in Jira and its Terminologies
- Lecture 24 – Creating Test Cases, Preconditions & Test Sets in Jira Xray
- Lecture 25 – Importance of Test Plan in Xray and How to Create It
- Lecture 26 – What is Test Execution and How It Is Interlinked with Test Plan
- Lecture 27 – Important Note on Test Plan Terminologies

---

# What is Xray?

Xray is a **Test Management Plugin for Jira**.

Jira manages project work such as:

- Epic
- Story
- Task
- Bug

By default, Jira **does not support test case management**.

After installing Xray, Jira can also manage:

- Test Cases
- Preconditions
- Test Sets
- Test Plans
- Test Executions

---

# Why Xray?

Without Xray

```
Jira
│
├── Story
├── Bug
├── Task
└── Epic
```

With Xray

```
Jira
│
├── Story
├── Bug
├── Task
├── Epic
├── Test
├── Precondition
├── Test Set
├── Test Plan
└── Test Execution
```

Xray converts Jira into a complete Test Management tool.

---

# Xray Issue Types

After installing Xray, six new issue types become available.

## 1. Test

Represents a single Test Case.

Example

```
Verify Login Functionality

Verify Forgot Password

Verify Payment Success
```

Each Test contains:

- Description
- Test Steps
- Test Data
- Expected Results

---

## 2. Precondition

A condition that must be completed before executing a test.

Example

Before testing Credit Card Payment

User must

- Login
- Have Active Account
- Have Credit Card
- Have Available Balance

Without completing these conditions,

the test cannot be executed correctly.

---

## 3. Test Set

A Test Set is a collection of related Test Cases.

Think of it as a folder.

Example

```
Login Test Set

│
├── Login Valid
├── Login Invalid
├── Forgot Password
├── Logout
```

Companies also create Test Sets based on

- Team
- Module
- Feature

Example

```
Team A Test Set

Payment Test Set

Regression Test Set
```

---

## 4. Test Plan

A Test Plan groups the Test Cases that must be executed for one specific release.

Example

There are 100 Test Cases.

For Release 1.2

Only 30 are required.

Those 30 Test Cases are added into one Test Plan.

Example

```
Release : 26-Jan

Test Plan

│
├── Login Test
├── Payment Test
├── Profile Test
└── Dashboard Test
```

Purpose

- Organize testing
- Define release scope
- Share testing scope with team

---

## 5. Test Execution

Test Execution is the actual execution of Test Cases inside a Test Plan.

Tester executes each test and marks

- PASS
- FAIL
- BLOCKED

Example

```
Login Test

PASS

Payment Test

FAIL

Profile Test

PASS
```

---

# Test Case Structure in Xray

Each Test contains

## Description

Explains

- Objective
- Module
- Sprint
- Functional / UI / Negative Test

---

## Test Steps

Each step contains

Action

Expected Result

Example

Step

Open Login Page

Expected Result

Login Page should open

---

Step

Enter Username

Expected Result

Username accepted

---

Step

Click Login

Expected Result

Dashboard displayed

---

## Test Data

Optional.

Contains

- Username
- Password
- URLs
- IDs

Example

Username

admin@test.com

Password

Welcome@123

---

## Attachments

Screenshots

Documents

Evidence

Reference Images

---

# Preconditions

Example

Forgot Password Test

Precondition

- User is on Login Page
- User has Registered Email
- Internet Connection Available

Only after completing these,

execute the Test Steps.

---

# Test Set Example

```
Password Reset

│
├── Invalid Email
├── Valid Email
├── Expired Link
├── Password Rules
└── Old Session Logout
```

All Password Reset Test Cases belong to one Test Set.

---

# Test Plan Example

Suppose

Total Test Cases = 100

Release needs only

30 Test Cases

Create

```
Release Test Plan

│
├── Login
├── Payment
├── Transfer
└── Dashboard
```

Only these are executed before deployment.

---

# Test Execution Flow

Requirement

↓

Create Test Case

↓

Create Precondition

↓

Group into Test Set

↓

Create Test Plan

↓

Execute Tests

↓

PASS / FAIL

↓

Report Bugs

---

# Important Note about Test Plan

There are two meanings of Test Plan.

## 1. Xray Test Plan

Used only inside Jira Xray.

Purpose

Group Test Cases for one Release.

---

## 2. Software Testing Test Plan

A formal document.

Contains

- Scope
- Resources
- Risks
- Strategy
- Schedule

This is explained later in STLC.

Do not confuse these two.

---

# Real-Time Example

Application

GitHub

Feature

Forgot Password

Precondition

User is on Login Page

↓

Test Case

Enter Registered Email

↓

Test Set

Password Reset Module

↓

Test Plan

Release 1.2 Regression

↓

Test Execution

PASS / FAIL

↓

Bug Raised if Failed

---

# Important Interview Points

✔ What is Xray?

✔ Why is Xray used in Jira?

✔ Difference between Jira and Xray.

✔ What is a Test?

✔ What is a Precondition?

✔ What is a Test Set?

✔ What is a Test Plan?

✔ What is Test Execution?

✔ Difference between Test Set and Test Plan.

✔ Difference between Xray Test Plan and Software Testing Test Plan.

---

# Frequently Asked Interview Questions

### Q1. What is Xray?

Xray is a Test Management plugin for Jira used to create, organize, execute, and manage test cases.

---

### Q2. Why do we use Preconditions?

To ensure all required conditions are satisfied before executing a test case.

---

### Q3. What is a Test Set?

A logical collection of related test cases.

---

### Q4. What is a Test Plan?

A release-specific collection of test cases selected for execution.

---

### Q5. What is Test Execution?

Executing test cases from a Test Plan and updating their execution status (Pass/Fail/Blocked).

---

### Q6. Difference between Test Set and Test Plan?

| Test Set | Test Plan |
|----------|-----------|
| Groups related test cases | Groups release-specific test cases |
| Permanent grouping | Temporary for a release |
| Used for organization | Used for execution |

---

# My Summary

- Jira manages project work.
- Xray adds Test Management capabilities to Jira.
- Test represents one Test Case.
- Preconditions must be completed before executing tests.
- Test Sets organize related test cases.
- Test Plans organize release-specific testing.
- Test Execution records actual testing results.
- Xray Test Plan and Software Testing Test Plan are different concepts.