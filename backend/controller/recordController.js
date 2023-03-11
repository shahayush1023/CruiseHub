const express = require("express");
const jwt = require("jsonwebtoken");
const recordmodel = require("../models/recordsmodel");
const jwtkey = "sndngu859hguo34gd";

module.exports.updateRecord = async function updateRecord(req, res, next) {
  console.log("Req.body = " , req.body);
  const { availability, id } = req.body;
  const updated = await  recordmodel.findByIdAndUpdate(id, {availability : availability}, {new : true});
  console.log("updated >> " , updated);
  // let record = await recordmodel.findById(id);
  // if (!record) {
  //   return res.status(404).send("record Not Found");
  // }

  // record.availability = availability;

  // await record.save();

  res.json({ success:true,updated });
};

module.exports.addRecord = async function addRecord(req, res, next) {
  try {
    const { date, availability } = req.body;
    console.log(availability);
    const record = new recordmodel({
      date,
      availability,
    });

    record.save();
    res.json(record);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};

module.exports.getRecord = async function getRecord(req, res, next) {
  try {
    const { id } = req.params;
    let record = await recordmodel.findById(id);
    if (!record) {
      return res.status(404).send({ success: false });
    }
    res.json({ success: true, record: record });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};
module.exports.getRecordByDate = async function getRecordByDate(req, res) {
  try {
    let { date } = req.body;
    console.log(date)
    let val = await recordmodel.findOne({ date: date });
    if (!val) {
      return res.json({ success: false });
    }
    res.json({ id: val._id, success: true });
  } catch (err) {
    res.json(err);
  }
};