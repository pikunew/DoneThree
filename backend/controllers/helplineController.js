const Helpline = require('../models/helplineModel');
const IssueType = require('../models/issueTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create helpline
exports.createHelpline = async (req, res, next) => {
    try {
        const helpline = await Helpline.create({
            issueType: req.body.issueType,
            user: req.user.id,
            stt: req.body.stt,
            issue: req.body.issue,
            agen: req.body.agen,
            uid: req.body.uid,
            map: req.body.map,
            num: req.body.num,
            sup: req.body.sup,
            des: req.body.des,
            lan: req.body.lan,
        });
        res.status(201).json({
            success: true,
            helpline
        })
    } catch (error) {
        next(error);
    }
}


//single helpline
exports.singleHelpline = async (req, res, next) => {
    try {
        const helpline = await Helpline.findById(req.params.id);
        res.status(200).json({
            success: true,
            helpline
        })
    } catch (error) {
        next(error);
    }
}


//update helpline by id.

exports.updateHelpline = async (req, res, next) => {
    try {
        const helpline = await Helpline.findByIdAndUpdate(req.params.helpline_id, req.body, { new: true }).populate('issueType', 'issueTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            success: true,
            helpline
        })
    } catch (error) {
        next(error);
    }
}
//show all helpline



// exports.showHelplines = async (req, res, next) => {

//       //enable search 
//       const keyword = req.query.keyword ? {
//         issue: {
//             $regex: req.query.keyword,
//             $options: 'i'
//         }
//     } : {}


//         //helplines by location
//         let locations = [];
//         const helplineByLocation = await Helpline.find({}, { location: 1 });
//         helplineByLocation.forEach(val => {
//             locations.push(val.location);
//         });
//         let setUniqueLocation = [...new Set(locations)];
//         let location = req.query.location;
//         let locationFilter = location !== '' ? location : setUniqueLocation;
    

//       // filter helplines by category ids
//       let ids = [];
//       const issueTypeCategory = await IssueType.find({}, { _id: 1 });
//       issueTypeCategory.forEach(cat => {
//           ids.push(cat._id);
//       })
  
//       let cat = req.query.cat;
//       let categ = cat !== '' ? cat : ids;


//     // pagination
//     const pageSize = 9;
//     const page = Number(req.query.pageNumber) || 1;
//     // const count = await Helpline.find({}).estimatedDocumentCount();
//     const count = await Helpline.find({ ...keyword, issueType: categ, location: locationFilter }).countDocuments();

//     try {
//         const helplines = await Helpline.find({ ...keyword, issueType: categ, location: locationFilter }).skip(pageSize * (page - 1)).limit(pageSize)
//         res.status(200).json({
//             success: true,
//             helplines,
//             page,
//             pages: Math.ceil(count / pageSize),
//             count,
//             setUniqueLocation

//         })
//     } catch (error) {
//         next(error);
//     }
// }


exports.showHelplines = async (req, res, next) => {
    try {
      // Filter parameters
      const keyword = req.query.keyword;
      const cat = req.query.cat;
      const location = req.query.location;
  
      // Build filter conditions based on query parameters
      const filter = {};
  
      if (keyword) {
        filter.issue = {
          $regex: keyword,
          $options: 'i',
        };
      }
  
      if (cat) {
        filter.issueType = cat;
      }
  
      if (location) {
        filter.location = location;
      }
  
      // Pagination
      const pageSize = 9;
      const page = Number(req.query.pageNumber) || 1;
  
      const count = await Helpline.countDocuments(filter);
      const helplines = await Helpline.find(filter)
        .skip(pageSize * (page - 1))
        .limit(pageSize);
  
      // Get unique locations
      const uniqueLocations = await Helpline.distinct('map');
  
      res.status(200).json({
        success: true,
        helplines,
        page,
        pages: Math.ceil(count / pageSize),
        count,
        setUniqueLocation: uniqueLocations,
      });
    } catch (error) {
      next(error);
    }
  };
  


  








