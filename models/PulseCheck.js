const mongoose = require('mongoose');

const PulseCheckSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },  
  departmentId: {
    type: String,
    required: true,
  },
  targetStaffingLevels: {
    type: Number,
    required: true,
  },
  currentStaffingLevels: {
    type: Number,
    required: true,
  },
  complexTime:{
    type: String,
    required: true,
  },
  complexNumber:{
    type: String,
    required: true,
  },
  trucksTarget: {
    type: Number,
    required: false,
  },
  trucksInService: {
    type: Number,
    required: false,
  },

  // Below are the checkboxes.  I still need to get these to return properly. 
  // It looks like i'll need some basic code to validate that the check box is checked or unchecked otherwise it always returns true

  // supplyRoomDelivery: {
  //   type: String,
  //   required: true,
  // },
  // warehouseDelivery: {
  //   type: Boolean,
  //   required: true,
  // },
  // icer:{
  //   type: Boolean,
  //   required: true,
  // },
  // flightChecker: {
  //   type: Boolean,
  //   required: true,
  // },
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
