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
package io.biza.deepthought.shared.persistence.mapper.product.banking;

import io.biza.babelfish.cdr.models.payloads.banking.product.BankingProductConstraintV1;
import io.biza.deepthought.shared.mapper.OrikaFactoryConfigurerInterface;
import io.biza.deepthought.shared.payloads.dio.product.DioProductConstraint;
import io.biza.deepthought.shared.persistence.model.product.banking.ProductBankConstraintData;
import ma.glasnost.orika.MapperFactory;

public class ProductBankConstraintDataMapper implements OrikaFactoryConfigurerInterface {

  @Override
  public void configure(MapperFactory orikaMapperFactory) {
    orikaMapperFactory.classMap(ProductBankConstraintData.class, DioProductConstraint.class)
        .fieldAToB("id", "id").field("", "cdrBanking").byDefault().register();
    orikaMapperFactory
        .classMap(ProductBankConstraintData.class, BankingProductConstraintV1.class).byDefault()
        .register();
  }

}
