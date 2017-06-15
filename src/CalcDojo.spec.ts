import {expect} from "chai";
import {CalcDojo} from "./CalcDojo";


const calc = new CalcDojo();


describe("CalcDojo", () => {

    describe("when asked to add numbers", () => {

        it("should return the right result", () => {

            expect(calc.calculate("10+20")).to.equal(30);

        });

    });


    xdescribe("when asked to subtract numbers", () => {

        it("should return the right result", () => {

            expect(calc.calculate("100-20")).to.equal(80);

        });

    });


    xdescribe("when asked to multiply numbers", () => {

        it("should return the right result", () => {

            expect(calc.calculate("20*2")).to.equal(40);

        });

    });


    xdescribe("edge cases", () => {

        xit("should care about operators precedence", () => {

            expect(calc.calculate("20+20*20")).to.equal(420);

        });

        xit("should ignore whitespaces", () => {

            expect(calc.calculate("1 + 2  + 3")).to.equal(6);

        });


    });


});