
import React, {Fragment, useState} from "react";

const EditEvent = ({event}) => {
    const [event_details, setEvents] = useState(event.event_details);
    
    //edit edit_details function

    const updateEvents = async(a) => {
        a.preventDefault();
        try {
            const body = {event_details};
            const response = await fetch(`http://localhost:5000/event/${event.event_id}`, {
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"
        } catch (err) {
            console.error(err.message);
            
        }
    };

    return ( 
    <Fragment>
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${event.event_id}`}>
        Düzenle
    </button>
    {/*
        id = id10
    */}
    <div    
        class="modal" 
        id={`id${event.event_id}`}
        onClick = {() => setEvents(event.event_details)}>
      <div class="modal-dialog">
        <div class="modal-content">
    
          
          <div class="modal-header">
            <h4 class="modal-title">Edit Event</h4>
            <button type="button" class="close" data-dismiss="modal" onClick = {() => setEvents(event.event_details)}>&times;</button>
          </div>
    
          
          <div class="modal-body">
            <input type="text" className="form-control" value={event_details} onChange={a =>
            setEvents(a.target.value)}/>
          </div>
    
          
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {a => updateEvents(a)} >Edit</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick = {() => setEvents(event.event_details)}>Close</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
    );
};

export default EditEvent;