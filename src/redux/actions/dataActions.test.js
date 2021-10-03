const dataActions = require("./dataActions")
// @ponicode
describe("dataActions.getAllDataHotel", () => {
    test("0", () => {
        dataActions.getAllDataHotel()
    })
})

// @ponicode
describe("dataActions.textForSearching", () => {
    test("0", () => {
        let callFunction = () => {
            dataActions.textForSearching("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            dataActions.textForSearching("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            dataActions.textForSearching("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            dataActions.textForSearching("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            dataActions.textForSearching(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            dataActions.textForSearching("Hello")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("6", () => {
        let callFunction = () => {
            dataActions.textForSearching("foo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("7", () => {
        let callFunction = () => {
            dataActions.textForSearching("Hello, world!!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("8", () => {
        let callFunction = () => {
            dataActions.textForSearching("~foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("9", () => {
        let callFunction = () => {
            dataActions.textForSearching("  This is ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("10", () => {
        let callFunction = () => {
            dataActions.textForSearching("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
