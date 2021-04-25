import React, { useState, useCallback } from 'react';
import SelectDatepicker from 'react-select-datepicker';
import { Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getKey } from "../lib/util";

const AddTask = (props) => {

  const onSubmit = () => {

  };

  return (
    <Card className="panel panel-warning">
      <Card.Header variant="primary" className="d-flex justify-content-between">
        <span>Chi tiết công việc</span>
        <span
          className="fa fa-times-circle text-right"
          type="button"
          onClick={onCloseForm}></span>
      </Card.Header>
      <Card.Body className="panel-body">
        <form>
          <div className="form-group">
            <label>Tên công việc</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Mô tả</label>
            <input
              type="text"
              name="address"
              className="form-control"
            />
          </div>
          <div>
            <label>Ngày bắt đầu</label>
            <SelectDatepicker
              value={value}
              onDateChange={onDateChange}
              minDate={new Date(1900, 0, 1)}
              maxDate={new Date()}
            />
          </div>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning w-10">
              Yes
            </button>
            &nbsp;
            <button
              type="reset"
              className="btn btn-danger w-10"
              onClick={onCloseForm}>
              Cancel
            </button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};
export default AddTask;
