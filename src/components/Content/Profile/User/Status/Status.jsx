import React from 'react'
import styles from './Status.module.css'

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }

  select = (event) => {
    event.currentTarget.select()
  }

  updateStatus = () => {
    this.deactivateEditMode()
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (event) => {
    this.setState({ status: event.currentTarget.value })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
    console.log('UPDATE')
  }

  render () {
    return (
      <div className={styles.status}>
        {
          !this.state.editMode &&
          <div onClick={this.activateEditMode}>{this.props.status ||
          'null'}</div>
        }

        {
          this.state.editMode &&
          <div>
            <input autoFocus onChange={this.onStatusChange}
                   onBlur={this.updateStatus} onFocus={this.select}
                   type="text" value={this.state.status}/>
          </div>
        }
      </div>
    )
  }
}

export default Status