/**
 * Deep Thought Administration API
 * This is the Deep Thought Administration API. You can find out more about Deep Thought at [https://github.com/bizaio/deepthought](https://github.com/bizaio/deepthought) or on the [DataRight.io Slack, #oss](https://join.slack.com/t/datarightio/shared_invite/enQtNzAyNTI2MjA2MzU1LTU1NGE4MmQ2N2JiZWI2ODA5MTQ2N2Q0NTRmYmM0OWRlM2U5YzA3NzU5NDYyODlhNjRmNzU3ZDZmNTI0MDE3NjY).
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CdrBankingAccount } from './cdrBankingAccount';
import { DioAccountStatus } from './dioAccountStatus';
import { DioBankAccountType } from './dioBankAccountType';
import { DioProduct } from './dioProduct';
import { DioProductBundle } from './dioProductBundle';
import { DioSchemeType } from './dioSchemeType';

/**
 * A Deep Thought Bank Account Container
 */
export interface DioBankAccount { 
    /**
     * Deep Thought Bank Account Identifier
     */
    id: string;
    schemeType: DioSchemeType;
    /**
     * Creation Date Time
     */
    readonly creationDateTime?: Date;
    openStatus?: DioAccountStatus;
    productCategory: DioBankAccountType;
    /**
     * The display name of the account as defined by the bank. This should not incorporate account numbers or PANs. If it does the values should be masked according to the rules of the MaskedAccountString common type.
     */
    displayName: string;
    /**
     * A customer supplied nick name for the account
     */
    nickName?: string;
    /**
     * Account Number
     */
    accountNumber?: number;
    bundle?: DioProductBundle;
    product?: DioProduct;
    cdrBanking: CdrBankingAccount;
}