/*******************************************************************************
 * Copyright (C) 2020 Biza Pty Ltd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *******************************************************************************/
package io.biza.deepthought.shared.payloads.dio.enumerations;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Form Field Type", enumAsRef = true)
public enum FormFieldType {
  ADDRESS_PAF_FLAT_UNIT_TYPE, ADDRESS_PAF_FLOOR_LEVEL_TYPE, ADDRESS_PAF_POSTAL_DELIVERY_TYPE, ADDRESS_PAF_STATE_TYPE, ADDRESS_PAF_STREET_SUFFIX, ADDRESS_PAF_STREET_TYPE, ADDRESS_PURPOSE, BANKING_ACCOUNT_STATUS, BANKING_ACCOUNT_STATUS_WITH_ALL, BANKING_LOAN_REPAYMENT_TYPE, BANKING_PAYEE_TYPE, BANKING_PAYEE_TYPE_WITH_ALL, BANKING_PAYMENT_NON_BUSINESS_DAY_TREATMENT, BANKING_PRODUCT_CATEGORY, BANKING_PRODUCT_CONSTRAINT_TYPE, BANKING_PRODUCT_DEPOSIT_RATE_TYPE, BANKING_PRODUCT_DISCOUNT_ELIGIBILITY_TYPE, BANKING_PRODUCT_DISCOUNT_TYPE, BANKING_PRODUCT_EFFECTIVE_WITH_ALL, BANKING_PRODUCT_ELIGIBILITY_TYPE, BANKING_PRODUCT_FEATURE_TYPE, BANKING_PRODUCT_FEE_TYPE, BANKING_PRODUCT_LENDING_RATE_INTEREST_PAYMENT_TYPE, BANKING_PRODUCT_LENDING_RATE_TYPE, BANKING_PRODUCT_RATE_TIER_APPLICATION_METHOD, BANKING_SCHEDULED_PAYMENT_STATUS, BANKING_TERM_DEPOSIT_MATURITY_INSTRUCTIONS, BANKING_TRANSACTION_SERVICE, BANKING_TRANSACTION_STATUS, BANKING_TRANSACTION_TYPE, COMMON_DISCOVERY_STATUS_TYPE, COMMON_EMAIL_ADDRESS_PURPOSE, COMMON_ORGANISATION_TYPE, COMMON_PHONE_NUMBER_PURPOSE, COMMON_UNIT_OF_MEASURE_TYPE, COMMON_WEEK_DAY, PAYLOAD_TYPE_ADDRESS, PAYLOAD_TYPE_BANKING_ACCOUNT, PAYLOAD_TYPE_BANKING_DOMESTIC_PAYEE, PAYLOAD_TYPE_BANKING_DOMESTIC_PAYEE_PAY_ID, PAYLOAD_TYPE_BANKING_PAYEE, PAYLOAD_TYPE_BANKING_SCHEDULED_PAYMENT_RECURRENCE, PAYLOAD_TYPE_BANKING_SCHEDULED_PAYMENT_TO, PAYLOAD_TYPE_CUSTOMER, PAYLOAD_TYPE_TRANSACTION_EXTENSION
}
