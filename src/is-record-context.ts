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
    return !is.undefined(object.timeframe) && is.number(object.timeframe)
        && !is.undefined(object.tradepair) && is.string(object.tradepair)
        && !is.undefined(object.exchange) && is.string(object.exchange)
}
