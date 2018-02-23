import * as React from "react"
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    ControlLabel
} from "react-bootstrap"
import { Message } from "../message"

import * as SearchUtils from "../utilities/search-utilities"
import SearchResult from "./search-result"
export default class LocationReportsSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            message: {message: "", type: "danger"},
            results: []
        }

        this.searchForm = {}
        this.onChange = this.onChange.bind(this)
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <Form onChange={this.onChange}>
                    <h3>Search Location Reports</h3>

                    <Message message={this.state.message} />

                    <FormGroup>
                        <ControlLabel>Agent</ControlLabel>
                        <FormControl type="number"
                            inputRef={agentId => this.searchForm.agentId = agentId}
                            placeholder="enter agent ID" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Location</ControlLabel>
                        <FormControl type="number"
                            inputRef={locationId => this.searchForm.locationId = locationId}
                            placeholder="enter location ID" />
                    </FormGroup>
                    <FormGroup className="form-inline">
                        <ControlLabel className="form-section-inline">From</ControlLabel>
                        <FormControl className="form-section-inline" type="datetime-local"
                            inputRef={fromTime => this.searchForm.fromTime = fromTime}
                            defaultValue={SearchUtils.getFormDate(SearchUtils.getDateDaysAgo(7))}/>

                        <ControlLabel className="form-section-inline">To</ControlLabel>
                        <FormControl className="form-section-inline" type="datetime-local"
                            inputRef={toTime => this.searchForm.toTime = toTime}
                            defaultValue={SearchUtils.getFormDate(new Date())} />
                    </FormGroup>
                </Form>
                
                <SearchResult results={this.state.results} />
            </div>
        )
    }

    onChange(e) {
        e.preventDefault()
        SearchUtils.getResultsAsynch('/v1/api/reports/locationstatuses', this.searchForm)
            .then(results => {
                this.setState({ results: results, message: { message: "", type: "danger" } })
            })
            .catch(error => this.setState({ message: {message: error, type: "danger"}}))
    }
}
