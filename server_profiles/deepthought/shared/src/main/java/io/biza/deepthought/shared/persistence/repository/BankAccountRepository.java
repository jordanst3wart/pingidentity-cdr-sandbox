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
package io.biza.deepthought.shared.persistence.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import io.biza.deepthought.shared.persistence.model.bank.account.BankAccountData;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccountData, UUID>, JpaSpecificationExecutor<BankAccountData> {
  public List<BankAccountData> findAllByBranchIdAndBranchBrandId(UUID branchId, UUID brandId);
  public Optional<BankAccountData> findByIdAndBranchIdAndBranchBrandId(UUID id, UUID branchId, UUID brandId);
  public Optional<BankAccountData> findByIdAndBranchBrandId(UUID id, UUID brandId);
  public Optional<BankAccountData> findByIdAndCustomerAccountsCustomerId(UUID id, UUID customerId);
}
