// Code Keypad Component Here

function Keypad (){
    return (
        <div>
           <h1>Kwish passcode</h1>
           <form>
            <input type="password" onChange={event => console.log('Entering password...')}></input>
           </form>
        </div>
    )
}

export default Keypad;