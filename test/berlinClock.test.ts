import { describe, it, expect } from "@jest/globals";
import { validatetimestamp, checkTopLight, checkTopHour, checkBottomHour, checkTopMinutes, checkBottomMinutes, checkRepresentation } from "../src/berlinClock"



describe('Given a string Then validate if it is a valid timestamp', () => {
    it('should return false when string is aa:bb:cc', () => {
        expect(validatetimestamp("aa:bb:cc")).toBe(false);
    });

    it('should return false when string is empty', () => {
        expect(validatetimestamp("")).toBe(false);
    });

    it('should return true when string is 23:24:02', () => {
        expect(validatetimestamp("23:24:02")).toBe(true);
    });

    it('should return false when string is 56:70:70', () => {
        expect(validatetimestamp("56:70:70")).toBe(false)
    });
});

describe('Given a valid input time string', () => {
    describe('The Top seconds light should be on or off', () => {
        it('should be lit for even seconds 21:50:02', () => {
            expect(checkTopLight("21:50:02")).toBe("Y")
        });

        it('should be unlit for odd seconds 21:50:01', () => {
            expect(checkTopLight("21:50:01")).toBe("O")
        });
    });

});

describe('Given time validate the 5 hours row', () => {
    it('should return "OOOO" when time its "02:30:45"', () => {
        expect(checkTopHour("4:30:45")).toBe("OOOO");
    })

    it('should return "ROOO" when time its "05:30:45"', () => {
        expect(checkTopHour("05:30:45")).toBe("ROOO");
    })

    it('should return "RROO" when time its "10:10:10"', () => {
        expect(checkTopHour("10:10:10")).toBe("RROO");
    })

    it('should return "RRRO" when time its "16:10:10"', () => {
        expect(checkTopHour("16:10:10")).toBe("RRRO");
    })

    it('should return "RRRR" when time its "20:56:34"', () => {
        expect(checkTopHour("20:56:34")).toBe("RRRR");
    })
});

describe('Given time validate the 1 hour row', () => {
    it('should return "OOOO" when time its "10:10:10"', () => {
        expect(checkBottomHour("10:10:10")).toBe("OOOO");
    })

    it('should return "RRRO" when time its "23:56:34"', () => {
        expect(checkBottomHour("23:56:34")).toBe("RRRO");
    })

    it('should return "RRRR" when time its "04:30:45"', () => {
        expect(checkBottomHour("04:30:45")).toBe("RRRR");
    })
})

describe('Given time validate the top minutes row (5 & 15)', () =>{
    it('should return YYRYYROOOOO when time is 02:30:45', () => {
        expect(checkTopMinutes('02:30:45')).toBe('YYRYYROOOOO');
    });

    it('should return YYOOOOOOOOO when time is 10:10:10', () => {
        expect(checkTopMinutes('10:10:10')).toBe('YYOOOOOOOOO');
    });

    it('should return YYRYYRYYRYY when time is 16:56:56', () => {
        expect(checkTopMinutes('16:56:56')).toBe('YYRYYRYYRYY');
    });
    it('should return OOOOOOOOOOO when time is 23:02:02', () => {
        expect(checkTopMinutes('23:02:02')).toBe('OOOOOOOOOOO');
    });
})

describe('Given time validate the bottom minutes row', () => {
    it('should return YYYY when time is 02:34:45', () => {
         expect(checkBottomMinutes('02:34:45')).toBe('YYYY');
    });

    it('should return YY00 when time is 10:02:10', () => {
        expect(checkBottomMinutes('10:02:10')).toBe('YYOO');
    });

    it('should return YYYY when time is 16:59:56', () => {
        expect(checkBottomMinutes('16:59:56')).toBe('YYYY');
    });

    it('should return OOOO when time is 23:00:02', () => {
        expect(checkBottomMinutes('23:00:02')).toBe('OOOO');
    });
});


describe('Given time return full string representatio', () => {
    it('should return O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO when time is 12:56:01', () => {
        expect(checkRepresentation('12:56:01')).toBe('O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO');
    })

    it('should return O\nOOOO\nRROO\nYYRYYROOOOO\nOOOO when time is 02:30:45', () => {
        expect(checkRepresentation('02:30:45')).toBe('O\nOOOO\nRROO\nYYRYYROOOOO\nOOOO');
    })

    it('should return TimeIsNotValid when time is aa:bb:cc', () => {
        expect(checkRepresentation('aa:bb:cc')).toBe('TimeIsNotValid');
    })
});
