import React, {useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDog, getAllDogs } from "../../Redux/Actions/Actions"
import "./Form.css"

export default function Form({setState}) {

    const dispatch = useDispatch()

    const Temps = useSelector((state) => state.temps)
    const Dogs = useSelector((state) => state.dogs)

    const dogsNames = Dogs.map((dog) => dog.name.toLowerCase())

    
    const [tempsSelected, setTempsSelected] = useState([])
    const [error, setError] = useState({})
    
    const [form, setForm] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        min_life_span: "",
        max_life_span: "",
        image: "",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setError(validate(form))

        const dataDog = {
            ...form,
            life_span: form.min_life_span + - + form.max_life_span + " years",
            temperaments: tempsSelected
        }

        if(error === false) {
            dispatch(postDog(dataDog))
            dispatch(getAllDogs())
            setState(false)
        }
    }

    const handleName = (e) => {
        const value = e.target.value
        const nameHandle = e.target.name
        setForm({...form, [nameHandle]: value})
    }

    const handleTemps = (e) => {

        if(tempsSelected.length > 5) return false

        if(tempsSelected.includes(e.target.value)) return alert("You can not add the same temperament")

        if (e.target.value === "select") return;
            for (const key of tempsSelected) {
                if (key.temperament === e.target.value) return;
            }
        setTempsSelected([...tempsSelected, e.target.value]);
    };

    const validate = (form) => {
        let errors = {
            name: {},
            min_height: {},
            max_height: {},
            min_weight: {},
            max_weight: {},
            temperaments: {},
            min_life_span: {},
            max_life_span: {},
        }

        if(!form.name) errors.name.nameRequired = "The name is required";
        if (!form.name.match(/^[A-Za-z]+$/)) errors.name.nameNumber = "The name must only contain letters";
        if (!form.name.match(/^[A-Z][a-z]+$/)) errors.name.nameCapital = "The name must start with a capital letter";
        if (dogsNames.includes(form.name.toLowerCase())) errors.name.nameInclude = "The name already exists";
        
        if(!form.min_height) errors.min_height.minHeightEmpty = "Min height is required"
        if(!form.max_height) errors.max_height.maxHeightEmpty = "Max height is required"
        if(!form.min_weight) errors.min_weight.minWeightEmpty = "Min weight is required"
        if(!form.max_weight) errors.max_weight.maxWeightEmpty = "Max weight is required"
        if(!form.min_life_span) errors.min_life_span.minLifeEmpty = "Min life span is required"
        if(!form.max_life_span) errors.max_life_span.maxLifeEmpty = "Max life span is required"
        
        
        if (parseFloat(form.min_height) === 0) errors.min_height.minHeight0 = "Min height value can not be 0"
        if (parseFloat(form.max_height) === 0) errors.max_height.maxHeight0 = "Max height value can not be 0"
        if (parseFloat(form.min_weight) === 0) errors.min_weight.minWeight0 = "Min weight value can not be 0"
        if (parseFloat(form.max_weight) === 0) errors.max_weight.maxWeight0 = "Max weight value can not be 0"
        if (parseFloat(form.min_life_span) === 0) errors.min_life_span.minLife0 = "Min life span value can not be 0"
        if (parseFloat(form.max_life_span) === 0) errors.max_life_span.maxLife0 = "Max life span value can not be 0"
        
        
        if (parseFloat(form.min_height) > parseFloat(form.max_height)) errors.min_height.heigthMin = "Min height can not be greater than max height"
        if (parseFloat(form.min_weight) > parseFloat(form.max_weight)) errors.min_weight.weightMin = "Min weight can not be greater than max weight" 
        if (parseFloat(form.min_life_span) > parseFloat(form.max_life_span)) errors.min_life_span.lifeMin = "Min life can not be greater than max life" 
        
        
        
        if(tempsSelected.length === 0) errors.temperaments.one = "You need to select at least one temperament"
        
        if(Object.keys(errors.name).length === 0 && Object.keys(errors.min_height).length === 0 && Object.keys(errors.max_height).length === 0 && Object.keys(errors.min_weight).length === 0 && Object.keys(errors.max_weight).length === 0 && Object.keys(errors.min_life_span).length === 0 && Object.keys(errors.max_life_span).length === 0){
            return errors = false
        }

        return errors
    }
    
    const handleRemove = (e) => {
        setTempsSelected(tempsSelected.filter((t) => t !== e.target.outerText));
    };

  return (
    <article id="form-wrapper">
        <article id="form-wrapper-container">
            <article id="wrapper-x" onClick={() => setState(false)}>
                X
            </article>
            <form onSubmit={handleSubmit} id="Form">
                <fieldset id="flex-form-row">
                    <fieldset className="flex-form-values">
                        <input type="text" autoComplete="off" name="name" value={form.name} onChange={handleName} placeholder="Name" className="input" id={error.name && Object.keys(error.name).length > 0 ? "error-input" : null}/>
                        {error.name && Object.keys(error.name).length > 0 ? 
                        <ul>
                            {error.name && error.name.nameRequired && <li className="error">{error.name.nameRequired}</li>}
                            {error.name && error.name.nameNumber && <li className="error">{error.name.nameNumber}</li>}
                            {error.name && error.name.nameCapital && <li className="error">{error.name.nameCapital}</li>}
                            {error.name && error.name.nameInclude && <li className="error">{error.name.nameInclude}</li>}
                        </ul> : null}
                
                        <input type="text" autoComplete="off" name="min_height" value={form.min_height} onChange={handleName} placeholder="Min Heigth" className="input" id={error.min_height && Object.keys(error.min_height).length > 0 ? "error-input" : null}/>
                        {error.min_height && Object.keys(error.min_height).length > 0 ? 
                        <ul>
                            {error.min_height.minHeightEmpty && <li className="error">{error.min_height.minHeightEmpty}</li>}
                            {error.min_height.heightEmpty && <li className="error">{error.min_height.heightEmpty}</li>}
                            {error.min_height.heigthMin && <li className="error">{error.min_height.heigthMin}</li>}
                            {error.min_height.minHeight0 && <li className="error">{error.min_height.minHeight0}</li>}
                        </ul> : null}
                
                        <input type="text" autoComplete="off" name="min_weight" value={form.min_weight} onChange={handleName} placeholder="Min Weight" className="input" id={error.min_weight && Object.keys(error.min_weight).length > 0 ? "error-input" : null}/>
                        {error.min_weight && Object.keys(error.min_weight).length > 0 ? 
                        <ul>
                            {error.min_weight.minWeightEmpty && <li className="error">{error.min_weight.minWeightEmpty}</li>}
                            {error.min_weight.weightMin && <li className="error">{error.min_weight.weightMin}</li>}
                            {error.min_weight.minWeight0 && <li className="error">{error.min_weight.minWeight0}</li>}
                        </ul> : null} 

                        <input type="text" autoComplete="off" name="min_life_span" value={form.min_life_span} onChange={handleName} placeholder="Min Life Span" className="input" id={error.min_life_span && Object.keys(error.min_life_span).length > 0 ? "error-input" : null}/>
                        {error.min_life_span && Object.keys(error.min_life_span).length > 0 ? 
                        <ul>
                            {error.min_life_span.minLifeEmpty && <li className="error">{error.min_life_span.minLifeEmpty}</li>}
                            {error.min_life_span.lifeMin && <li className="error">{error.min_life_span.lifeMin}</li>}
                            {error.min_life_span.minLife0 && <li className="error">{error.min_life_span.minLife0}</li>}
                        </ul> : null}          
                        
                    
                    </fieldset>
                    <fieldset className="flex-form-values">
                        <input type="text" autoComplete="off" name="image" value={form.image} onChange={handleName} placeholder="Image url" className="input"/>
                        <input type="text" autoComplete="off" name="max_height" value={form.max_height} onChange={handleName} placeholder="Max Heigth" className="input" id={error.max_height && Object.keys(error.max_height).length > 0 ? "error-input" : null}/>
                        {error.max_height && Object.keys(error.max_height).length > 0 ? 
                        <ul>
                            {error.max_height.maxHeightEmpty && <li className="error">{error.max_height.maxHeightEmpty}</li>}
                            {error.max_height.maxHeight0  && <li className="error">{error.max_height.maxHeight0}</li>}
                        </ul> : null}
                        <input type="text" autoComplete="off" name="max_weight" value={form.max_weight} onChange={handleName} placeholder="Max Weight" className="input" id={error.max_weight && Object.keys(error.max_weight).length > 0 ? "error-input" : null}/>
                        {error.max_weight && Object.keys(error.max_weight).length > 0 ?  
                        <ul>
                            {error.max_weight.maxWeightEmpty && <li className="error">{error.max_weight.maxWeightEmpty}</li>}
                            {error.max_weight.maxWeight0 && <li className="error">{error.max_weight.maxWeight0}</li>}
                        </ul> : null}
                        <input type="text" autoComplete="off" name="max_life_span" value={form.max_life_span} onChange={handleName} placeholder="Max Life Span" className="input" id={error.max_life_span && Object.keys(error.max_life_span).length > 0 ? "error-input" : null}/>
                        {error.max_life_span && Object.keys(error.max_life_span).length > 0 ? 
                        <ul>
                            {error.max_life_span.maxLifeEmpty && <li className="error">{error.max_life_span.maxLifeEmpty}</li>}
                            {error.max_life_span.maxLife0  && <li className="error">{error.max_life_span.maxLife0}</li>}
                        </ul> : null}          
                    </fieldset>
                </fieldset>
                    <select name="temperament" onChange={handleTemps} id={error.temperaments && Object.keys(error.temperaments).length ? "error-input" : null}>
                        <option defaultValue={(e) => e.target.value} disabled />
                        {Temps.map((temp) => {
                            return(
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            )
                        })}
                    </select>
                    {error.temperaments && Object.keys(error.temperaments).length > 0 ? 
                    <ul>
                        {error.temperaments && error.temperaments.one && <li className="error">{error.temperaments.one}</li>}
                    </ul> : null} 
                {tempsSelected && tempsSelected.length > 0 && (
                    <div id="temps_div">
                    {tempsSelected.map((t) => (
                        <span key={t} id="span-style" value={t} onClick={handleRemove}>
                            {t}
                        </span>
                    ))}
                    </div>
                )}
                <input type="submit" value="Submit" id={Object.keys(error).length > 0 ? "error-button" : "normal-button"}/>
            </form>
        </article>
    </article>
  )
}
