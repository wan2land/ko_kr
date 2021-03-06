
import { format } from './format'


describe('testsuite of phone/format', () => {
  it('test format', () => {
    const prefix = [
      '02', // seoul
      '0505', // LG+
      '010', '011', '012', '015', '016', '017', '018', '019', // mobile
      '030', '050', '060', '070', '080', // etc
      '031', '032', '033', '041', '042', '043', '044', '051', '052', '053', '054', '055', '061', '062', '063', '064', // local
    ]
    for (const no of prefix) {
      expect(format(`${no}`)).toEqual(`${no}`)
      expect(format(`${no}1`)).toEqual(`${no}-1`)
      expect(format(`${no}12`)).toEqual(`${no}-12`)
      expect(format(`${no}123`)).toEqual(`${no}-123`)
      expect(format(`${no}1234`)).toEqual(`${no}-123-4`)
      expect(format(`${no}12345`)).toEqual(`${no}-123-45`)
      expect(format(`${no}123456`)).toEqual(`${no}-123-456`)
      expect(format(`${no}1234567`)).toEqual(`${no}-123-4567`)
      expect(format(`${no}12345678`)).toEqual(`${no}-1234-5678`)
      expect(format(`${no}123456789`)).toEqual(`${no}123456789`) // unknown
    }
  })

  it('test format 15xx ~ 19xx', () => {
    const prefix = [
      '1588', '1577', '1899',
      '1544', '1644', '1661',
      '1566', '1600', '1670',
      '1688', '1666',
      '1599', '1877', '1855', '1800',
    ]
    for (const no of prefix) {
      expect(format(`${no}`)).toEqual(`${no}`)
      expect(format(`${no}1`)).toEqual(`${no}-1`)
      expect(format(`${no}12`)).toEqual(`${no}-12`)
      expect(format(`${no}123`)).toEqual(`${no}-123`)
      expect(format(`${no}1234`)).toEqual(`${no}-1234`)
      expect(format(`${no}12345`)).toEqual(`${no}12345`) // unknown
    }
  })
})
