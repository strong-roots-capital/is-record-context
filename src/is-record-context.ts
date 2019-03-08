/**
 * is-record-context
 * Test to determine if an object implements RecordContext
 */

import is from '@sindresorhus/is'
import RecordContext from '@strong-roots-capital/record-context'

/**
 * Type-guard for `RecordContext`.
 */
export default function isRecordContext(object: any): object is RecordContext {
    return !is.undefined((<RecordContext>object).timeframe) && is.number(object.timeframe)
        && !is.undefined((<RecordContext>object).tradepair) && is.string(object.tradepair)
        && !is.undefined((<RecordContext>object).exchange) && is.string(object.exchange)
}
