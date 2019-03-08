import test from 'ava'
import is from '@sindresorhus/is'
import RecordContext from '@strong-roots-capital/record-context'

/**
 * Library under test
 */

import isRecordContext from '../src/is-record-context'

test('should recognize RecordContexts', t => {
    const context: RecordContext = {
        timeframe: 1440,
        exchange: 'TESTEXCHANGE',
        tradepair: 'TESTTRADEPAIR'
    }
    t.true(isRecordContext(context))
})

test('should recognize RecordContexts with extra members', t => {
    const context = {
        timeframe: 1440,
        exchange: 'TESTEXCHANGE',
        tradepair: 'TESTTRADEPAIR',
        oldMacDonaldHadA: 'horse'
    }
    t.true(isRecordContext(context))
})

test('should not recognize RecordContexts without tradepair', t => {
    const context: any = {
        timeframe: 1440,
        exchange: 'TESTEXCHANGE'
    }
    t.false(isRecordContext(context))
})

test('should not recognize RecordContexts without exchange', t => {
    const context: any = {
        timeframe: 1440,
        tradepair: 'TESTEXCHANGE'
    }
    t.false(isRecordContext(context))
})

test('should not recognize RecordContexts without timeframe', t => {
    const context: any = {
        tradepair: 'TESTEXCHANGE',
        exchange: 'TESTEXCHANGE'
    }
    t.false(isRecordContext(context))
})

test('should not recognize an empty object', t => {
    t.false(isRecordContext({}))
})


test('should function as a type-guard', t => {
    const context = {
        timeframe: 1440,
        exchange: 'TESTEXCHANGE',
        tradepair: 'TESTTRADEPAIR',
        oldMacDonaldHadA: 'horse'
    }
    if (isRecordContext(context)) {
        let recordContext: RecordContext = context
        t.pass()
    } else {
        t.fail()
    }
})

test('should not recognize objects with timeframe of improper type', t => {
    const context = {
        timeframe: '1440',
        exchange: 'TESTEXCHANGE',
        tradepair: 'TESTTRADEPAIR'
    }
    t.false(isRecordContext(context))
})

test('should not recognize objects with tradepair of improper type', t => {
    const context = {
        timeframe: '1440',
        exchange: 'TESTEXCHANGE',
        tradepair: 1234
    }
    t.false(isRecordContext(context))
})

test('should not recognize objects with exchange of improper type', t => {
    const context = {
        timeframe: '1440',
        exchange: 1234,
        tradepair: 'TESTTRADEPAIR'
    }
    t.false(isRecordContext(context))
})
