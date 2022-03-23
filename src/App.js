import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faBookmark, faPen } from '@fortawesome/free-solid-svg-icons'

export default function App() {
    return(
        <>
            <div class="row d-flex justify-content-center p-5">
                <div class="col-12 col-md-6 col-sm-12 mb-4">
                    <div class="input-group input-group-lg">
                        <span class="input-group-text bg-dark text-white" id="inputGroup-sizing-default">Your task</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Type and press Enter'/>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-sm-12">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <FontAwesomeIcon className="mx-2" icon={faBookmark}/>
                                    All (5)
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <div class="container px-1 d-flex justify-content-center align-items-center">
                                        <ul class="list-group col-11">
                                            <li class="list-group-item d-flex align-items-center justify-content-between">
                                                1. Learn Vue
                                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>  
                                            </li>
                                        </ul>
                                        <FontAwesomeIcon className="mx-4" icon={faPen}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <FontAwesomeIcon className="mx-2" icon={faCircleXmark}/>
                                    Incompleted (2)
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container px-1 d-flex justify-content-between align-items-center">
                                        <ul class="list-group col-11">
                                            <li class="list-group-item d-flex align-items-center justify-content-between">
                                                1. Learn Vue
                                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>  
                                            </li>
                                        </ul>
                                        <FontAwesomeIcon className='mx-4' icon={faPen}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <FontAwesomeIcon className="mx-2" icon={faCircleCheck}/>
                                    Completed (3)
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container px-1 d-flex justify-content-between align-items-center">
                                        <ul class="list-group col-11">
                                            <li class="list-group-item text-decoration-line-through text-decoration-primary d-flex align-items-center justify-content-between">
                                                1. Learn Vue
                                                <input class="form-check-input mt-0" checked type="checkbox" value="" aria-label="Checkbox for following text input"/>  
                                            </li>
                                        </ul>
                                        <FontAwesomeIcon className='mx-4' icon={faPen}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}