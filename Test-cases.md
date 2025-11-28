
# 📄 Saucedemo Test Documentation

This file contains the **complete test documentation** for the Saucedemo application.  
It includes two main sections:  

1. **Use Cases** – The main functionalities that users can perform in the application.  
2. **Detailed Test Cases** – Step-by-step test scenarios to validate each functionality, with actions and expected behavior.

---

# **Use Cases**

1. User Login
2. Sort Inventory Items
3. Add Items to Cart
4. View Shopping Cart
5. Checkout Information
6. Checkout Overview
7. Complete Checkout

---


# **Test Cases**

## Happy path – Full Successful Checkout
| Step | Actions / Steps                                           | Expected Behavior                                             |
|------|----------------------------------------------------------|---------------------------------------------------------------|
| 1    | Go to the URL https://www.saucedemo.com/                 | Login page is displayed                                        |
| 2    | Log in using standard_user/secret_sauce                  | User logs in successfully                                      |
| 3    | Sort items by "Price: Low to High"                       | Items are correctly sorted                                     |
| 4    | Add two items to the cart: Item 1 (quantity 2) and Item 2 (quantity 1) | Cart badge shows correct number (each time we click to add)    |
| 5    | Open cart                                                | Cart contains correct items                                    |
| 6    | Verify the correct items are listed and check the prices | Items match the added items with their correct prices          |
| 7    | Click Checkout                                           | Checkout page loads                                            |
| 8    | Enter First Name, Last Name, Postal Code                 | Checkout Information page accepts valid data                   |
| 9    | Continue to the checkout overview                        | Overview page displays                                         |
| 10   | Validate items, item total, tax (8%), and final total    | Item total = (Item 1 price × 2) + (Item 2 price × 1); Tax = Item total × 8%; Final total = Item total + Tax |
| 11   | Click Finish                                             | A confirmation message is shown and Cart badge is empty (please check the mockup to validate the confirmation message) |

---

## TC01 – Invalid Login
| Step | Actions / Steps                                          | Expected Behavior                                      |
|------|----------------------------------------------------------|-------------------------------------------------------  |
| 1    | Navigate to login page                                   | Login page is displayed                                |
| 2    | Enter invalid username/password then Click login         | Error message displayed : (error content not indicated on the US so it should be checked with PO before validation)
---

## TC02 – Sort High to Low
| Step | Actions / Steps                                           | Expected Behavior                                        |
|------|----------------------------------------------------------|-------------------------------------------------------    |
| 1    | Login with valid credentials                              | User logs in successfully                               |
|  2   | Sort items by "Price: High to Low"                        | Items displayed in descending price order                |

---

## TC03 – Remove Item Before Checkout
| Step | Actions / Steps                                           | Expected Behavior                                      |
|------|----------------------------------------------------------|-------------------------------------------------------|
| 1    | Login                                                     | User logs in successfully                               |
| 2    | Add 2 items to cart                                       | Cart badge updates                                      |
| 3    | Open cart                                                 | Cart page loads                                        |
| 4    | Verify items                                              | Correct items displayed                                 |
| 5    | Remove 1 item                                             | Cart shows remaining item                               |
| 6    | Click Checkout                                            | Checkout page loads                                     |
| 7    | Continue to Checkout Overview                             | Overview shows only remaining item(s)                  |

---

## TC04 – Missing First Name
| Step | Actions / Steps                                           | Expected Behavior                                      |
|------|----------------------------------------------------------|-------------------------------------------------------|
| 1    | Login                                                     | User logs in successfully                               |
| 2    | Add 2 items to cart                                       | Cart badge updates                                      |
| 3    | Open cart                                                 | Cart page loads                                        |
| 4    | Verify items                                              | Correct items displayed                                 |
| 5    | Click Checkout                                            | Checkout page loads                                     |
| 6    | Leave First Name empty, fill Last Name and Postal Code then click on continue    |Cannot proceed, Error message displayed: “First Name is required”      |

---

## TC05 – Missing Last Name
| Step | Actions / Steps                                           | Expected Behavior                                      |
|------|----------------------------------------------------------|-------------------------------------------------------|
| 1    | Login                                                     | User logs in successfully                               |
| 2    | Add 2 items to cart                                       | Cart badge updates                                      |
| 3    | Open cart                                                 | Cart page loads                                        |
| 4    | Verify items                                              | Correct items displayed                                 |
| 5    | Click Checkout                                            | Checkout page loads                                     |
| 6    | Fill First Name and Postal Code, leave Last Name empty then click on continue   |Cannot proceed, Error message displayed: “Last Name is required”       |
                                    |

---

## TC06 – Missing Postal Code
| Step | Actions / Steps                                           | Expected Behavior                                      |
|------|----------------------------------------------------------|-------------------------------------------------------|
| 1    | Login                                                     | User logs in successfully                               |
| 2    | Add 2 items to cart                                       | Cart badge updates                                      |
| 3    | Open cart                                                 | Cart page loads                                        |
| 4    | Verify items                                              | Correct items displayed                                 |
| 5    | Click Checkout                                            | Checkout page loads                                     |
| 6    | Fill First Name and Last Name, leave Postal Code empty then click on continue   |Cannot proceed, Error message displayed: “Postal Code is required”     |


---

## TC07 – Cancel Checkout
| Step | Actions / Steps                                           | Expected Behavior                                      |
|------|----------------------------------------------------------|-------------------------------------------------------|
| 1    | Login                                                     | User logs in successfully                               |
| 2    | Add items to cart                                         | Cart badge updates                                      |
| 3    | Open cart                                                 | Cart page loads                                        |
| 4    | Verify items                                              | Correct items displayed                                 |
| 5    | Click Checkout                                            | Checkout page loads                                     |
| 6    | Fill required info                                        | Checkout Information accepted                           |
| 7    | Continue to Overview                                      | Overview page displays                                   |
| 8    | Click “Cancel”                                            | User returns to cart without completing checkout ( the expected behavior is not detailled on the US so we need to check with PO before validation)      |



ℹ️ Remark

The Happy Path – Full Successful Checkout has been automated, as well as two negative scenarios:

Invalid Login

Missing First Name

Other test cases can also be added, such as:

Logout then login and verify the state of the cart

Cancel checkout before entering checkout information

These additional cases are not described in the User Story (US) and can be implemented later if needed.