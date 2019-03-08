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
    return !is.nullOrUndefined(object.timeframe) && is.number(object.timeframe) && !is.nan(object.timeframe)
        && !is.nullOrUndefined(object.tradepair) && is.string(object.tradepair)
        && !is.nullOrUndefined(object.exchange) && is.string(object.exchange)
}
