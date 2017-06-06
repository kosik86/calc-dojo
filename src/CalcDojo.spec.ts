import {expect} from "chai";
import {CalcDojo} from "./CalcDojo";


const calc = new CalcDojo();


describe("CalcDojo", () => {

    describe("when asked to add numbers", () => {

        it("should return the right result", () => {

            expect(calc.calculate("1+2")).to.equal(3);

        });

    });


    xdescribe("when asked to subtract numbers", () => {

        it("should return the right result", () => {

            expect(calc.calculate("1-2")).to.equal(-1);

        });

    });


    xdescribe("when asked to multiply numbers", () => {

        it("should return the right result", () => {

            expect(calc.calculate("2*2")).to.equal(2);

        });

    });


    xdescribe("edge cases", () => {

        it("should care about operators precedence", () => {

            expect(calc.calculate("2+2*2")).to.equal(6);

        });

    });


});