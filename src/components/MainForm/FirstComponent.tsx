const FirstComponent = () => {

    const infoHandler = () => {
        
    }

    return (
       <form>
             <div>
             <input type="text" placeholder="Введіть Ім'я"/>
             <div>
                <button>Ж</button>
                <button>М</button>
             </div>
             </div>
             <input type="text" placeholder="Введіть дату народження"/>
             <button>Розрахувати</button>
             <div>
                <button>Стандарт</button>
                <button>Поглиблений</button>
             </div>
       </form>
    )
}

export default FirstComponent;