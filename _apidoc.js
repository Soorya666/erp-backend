// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Index.
// ------------------------------------------------------------------------------------------

/**
 * @api {get} / Retrieve Home Information
 * @apiName GetIndex
 * @apiGroup Index
 *
 * @apiSuccess {String} res server working.
 */

// ------------------------------------------------------------------------------------------
// User.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /add Add new User
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiBody {String} name Name and surname of user
 * @apiBody {String} password Password of the user
 * @apiBody {String} emailId EmailID of the user. It would be the college assosiated emailID
 * @apiBody {String} uid This will be their ERPID
 * @apiBody {String="Student", "Faculty"} userType This will be type of user.
 * currently we support only 2
 *
 * @apiSuccess {String} res returns success message "added user with \<ID\>".
 *
 * @apiError (Error 500) err Error while inserting in Database.
 */

// ------------------------------------------------------------------------------------------
// Auth.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /auth Login User
 * @apiName LoginUser
 * @apiGroup Authentication
 *
 * @apiBody {String} id User ID.
 * @apiBody {String} password User password.
 *
 * @apiSuccess {String} res Response message.
 * @apiSuccess {Object} user User details.
 * @apiSuccess {String} user.uid User ID.
 * @apiSuccess {String} user.name User name.
 * @apiSuccess {String} user.emailId User email ID.
 * @apiSuccess {String} user.type User type.
 * @apiSuccess {String} user.token User token.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "welcome",
 *       "user": {
 *         "uid": "123",
 *         "name": "Some User",
 *         "emailId": "someuser@example.com",
 *         "type": "user",
 *         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       }
 *     }
 *
 * @apiError (Error 403) UserDoesNotExist Incorrect ID or password.
 * @apiError (Error 500) ServerError Something is wrong on our side. Try again.
 */

/**
 * @api {post} /auth/validateUser Validate User
 * @apiName ValidateUser
 * @apiGroup Authentication
 * @apiDescription Validates the user's authentication token.
 *
 * @apiHeader {String} Authorization User's authentication token.
 *
 * @apiSuccess {Object} res User object.
 * @apiSuccess {Object} res.user User details.
 * @apiSuccess {String} res.user.uid User ID.
 * @apiSuccess {String} res.user.name User name.
 * @apiSuccess {String} res.user.emailId User email ID.
 * @apiSuccess {String} res.user.type User type.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": {
 *         "user": {
 *           "uid": "123",
 *           "name": "Some User",
 *           "emailId": "someuser@example.com",
 *           "type": "user"
 *         },
 *         "msg": "user validated",
 *         "err": null
 *       }
 *     }
 */

/**
 * @api {post} /auth/sendOTP Send OTP
 * @apiName SendOTP
 * @apiGroup Authentication
 * @apiDescription Sends an OTP (One-Time Password) to the user's email ID.
 *
 * @apiBody {String} uid User ID.
 * @apiBody {String} emailId User email ID.
 *
 * @apiSuccess {String} res Response message.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "otp sent to emailID"
 *     }
 *
 * @apiError (Error) IncorrectUidOrEmail Incorrect UID or emailId.
 */

/**
 * @api {post} /auth/resetPassword Reset Password
 * @apiName ResetPassword
 * @apiGroup Authentication
 * @apiDescription Resets the user's password using the provided OTP (One-Time Password).
 *
 * @apiBody {String} uid User ID.
 * @apiBody {String} otp One-Time Password received by the user.
 * @apiBody {String} password New password.
 *
 * @apiSuccess {String} res Response message.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "successfully updated password"
 *     }
 *
 * @apiError (Error) IncorrectOtp Incorrect OTP.
 * @apiError (Error 500) UpdateError Something went wrong while updating password.
 * @apiError (Error 500) ServerError Something went wrong.
 */

// ------------------------------------------------------------------------------------------
// Infrastructure.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /infrastructure/add Add Infrastructure
 * @apiName AddInfrastructure
 * @apiGroup Infrastructure
 *
 * @apiBody {String} name The name of the infrastructure.
 * @apiBody {String} type The type of the infrastructure.
 * @apiBody {String} wing The wing where the infrastructure is located.
 * @apiBody {Number} floor The floor where the infrastructure is located.
 * @apiBody {Number} capacity The capacity of the infrastructure.
 *
 * @apiSuccess {String} res Success message with the ID of the added infrastructure.
 *
 * @apiError (Error 500) DatabaseError Error while inserting in the database.
 *
 * @apiDescription Adds a new infrastructure to the system.
 */

/**
 * @api {get} infrastructure/list Get Infrastructure List
 * @apiName GetInfrastructure
 * @apiGroup Infrastructure
 *
 * @apiQuery {String} [name] Name of Infrastructure .
 * @apiQuery {String} [type] Type of Infrastructure. One of possible Lab, Classroom.
 * @apiQuery {String} [wing] Wing of Infrastructure. One of possible A,B,C.
 * @apiQuery {Number} [floor] Floor of Infrastructure.
 * @apiQuery {Number} [capacity] Capacity of Infrastructure.
 *
 * @apiSuccess {Infrastructure[]} res Array of Filtered Infrastructure Doc .
 * @apiSuccess {String} infrastructure._id ID of document given by database.
 * @apiSuccess {String} infrastructure.name Name of Infrastructure
 * @apiSuccess {String} infrastructure.type Type of Infrastructure. One of possible Lab, Classroom.
 * @apiSuccess {String} infrastructure.wing Wing of Infrastructure. One of possible A,B,C.
 * @apiSuccess {Number} infrastructure.floor Floor of Infrastructure.
 * @apiSuccess {Number} infrastructure.capacity Capacity of Infrastructure.
 */

/**
 * @api {delete} /infrastructure/delete/:infrastructureId Delete Infrastructure
 * @apiName DeleteInfrastructure
 * @apiGroup Infrastructure
 *
 * @apiParam {String} infrastructureId The ID of the infrastructure document to delete.
 *
 * @apiSuccess {String} res Success message indicating the deletion.
 *
 * @apiError (Error 500) err Error message if there was an error during the deletion.
 *
* */

/**
 * @api {post} /infrastructure/update Update infrastructure details
 * @apiName UpdateInfrastructure
 * @apiGroup Infrastructure
 * @apiDescription update Existing Infrastructure details
 *
 * @apiBody {String} id Id of the infrastructure to be updated
 * @apiBody {String} [name] The name of the infrastructure.
 * @apiBody {String} [type] The type of the infrastructure.
 * @apiBody {String} [wing] The wing where the infrastructure is located.
 * @apiBody {Number} [floor] The floor where the infrastructure is located.
 * @apiBody {Number} [capacity] The capacity of the infrastructure.
 *
 * @apiSuccess {String} res infrastructure updated.
 * @apiError (Error 500) err Error in updating database
 *
 */

// ------------------------------------------------------------------------------------------
// Accreditation.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /accreditation/add Add Accreditation
 * @apiName AddAccreditation
 * @apiGroup Accreditation
 * @apiDescription Add a new accreditation.
 *
 * @apiBody {String} name Accreditation name.
 * @apiBody {String} agencyName Agency name.
 * @apiBody {Date} dateofAccreditation Date of accreditation.
 * @apiBody {Date} dateofExpiry Date of expiry.
 *
 * @apiSuccess {String} res Response message.
 * @apiError (Error 500) UserNotFound The  of the User was not found
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "added accreditation Example Accreditation"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "err": "Error while inserting in DB"
 *     }
 */

/**
 * @api {delete} /accreditation/delete/:accreditationId To delete Accreditation
 * @apiName DeleteAccreditation
 * @apiGroup Accreditation
 *
 * @apiParam {String} accreditationId The ID of the accreditation document to delete.
 *
 * @apiSuccess {String} res Success message indicating the deletion.
 *
 * @apiError (Error 500) err Error message if there was an error during the deletion.
 *
* */

/**
 * @api {post} /accreditation/update update accreditation details
 * @apiName UpdateAccreditation
 * @apiGroup Accreditation
 * @apiDescription update Existing accreditation
 *
 * @apiBody {String} id Id of the accreditation to be updated
 * @apiBody {String} [name] Accreditation name.
 * @apiBody {String} [agencyName] Agency name.
 * @apiBody {Date} [dateofAccreditation] Date of accreditation.
 * @apiBody {Date} [dateofExpiry] Date of expiry.
 *
 * @apiSuccess {String} res Accreditation updated.
 * @apiError (Error 500) err Error in updating database
 *
 */

/**
 * @api {get} accreditation/list Get Accreditation List
 * @apiName GetAccreditation
 * @apiGroup Accreditation
 *
 * @apiQuery {String} [name] Name of accreditation .
 * @apiQuery {String} [agencyName] Name of agency that issued the accreditation.
 * @apiQuery {Date} [dateofAccreditation] Date on which accreditation was issued.
 * @apiQuery {Date} [dateofExpiry] Date till which accreditation is valid.
 *
 * @apiSuccess {accreditation[]} res Array of Filtered accreditation Doc.
 * @apiSuccess {String} accreditation._id ID of document given by database.
 * @apiSuccess {String} accreditation.name Name of accreditation.
 * @apiSuccess {String} accreditation.agencyName Name of agency that issued the accreditation.
 * @apiSuccess {Date} accreditation.dateofAccreditation Date on which accreditation was issued.
 * @apiSuccess {Date} accreditation.dateofExpiry Date till which accreditation is valid.
 */
//------------------------------------------------------------------------------------------
// Tutorials.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /tutorial/add Add Tutorial
 * @apiName AddTutorial
 * @apiGroup Tutorial
 *
 * @apiBody {Number} no The number of tutorial.
 * @apiBody {String} title The title of tutorial.
 * @apiBody {Number} hours The hours required for tutorial.
 * @apiBody {String} cognitiveLevel The cognitiveLevel of tutorial.
 *
 * @apiSuccess {String} res Success message with the ID of the added tutorial.
 *
 * @apiError (Error 500) DatabaseError Error while inserting in the database.
 *
 * @apiDescription Adds a new tutorial to the system.
 */

/**
 * @api {get} tutorial/list Get Tutorial List
 * @apiName GetTutorial
 * @apiGroup Tutorial
 *
 * @apiQuery {Number} [no] Number of Tutorial.
 * @apiQuery {String} [title] Title of Tutorial.
 * @apiQuery {Number} [hours] Hours required for Tutorial
 * @apiQuery {String} [cognitiveLevel] Level of Tutorial.
 *
 * @apiSuccess {Tutorial[]} res Array of Filtered Tutorial Doc .
 * @apiSuccess {String} tutorial._id ID of document given by database.
 * @apiSuccess {Number} tutorial.no Number of Tutorial.
 * @apiSuccess {String} tutorial.title Title of Tutorial.
 * @apiSuccess {String} tutorial.hours Hours of Tutorial.
 * @apiSuccess {Number} tutorial.cognitiveLevel CognitiveLevel of Tutorial.
 */

/**
 * @api {delete} /tutorial/delete/:tutorialId Delete Tutorial
 * @apiName DeleteTutorial,
 * @apiGroup Tutorial
 *
 * @apiParam {String} tutorialId The ID of the tutorial document to delete.
 *
 * @apiSuccess {String} res Success message indicating the deletion.
 *
 * @apiError (Error 500) err Error message if there was an error during the deletion.
 *
* */
/**
 * @api {post} /tutorial/update Update tutorial details
 * @apiName UpdateTutorial
 * @apiGroup Tutorial
 * @apiDescription update Existing Tutorial details
 *
 * @apiBody {String} id Id of the tutorial to be updated
 * @apiBody {Number} [no] The no of tutorial.
 * @apiBody {String} [title] The title of tutorial.
 * @apiBody {String} [hours] The hours required for the tutorial.
 * @apiBody {Number} [cognitiveLevel] The cognitiveLevel of tutorial.

 *
 * @apiSuccess {String} res tutorial updated.
 * @apiError (Error 500) err Error in updating database
 *
 */

// ------------------------------------------------------------------------------------------
// Timetable.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /timetable/add Add Timetable
 * @apiName AddTimetable
 * @apiGroup Timetable
 * @apiDescription Add a new timetable entry.
 *
 * @apiBody {Date} startDate Start date of the timetable.
 * @apiBody {Date} endDate End date of the timetable.
 * @apiBody {ObjectId} classIncharge ID of the faculty in charge (ObjectId).
 * @apiBody {ObjectId} group ID of the group (ObjectId).
 * @apiBody {ObjectId} activityBlueprints ID of the activity blueprint (ObjectId).
 * @apiBody {String} lunchBreakStartTime Start time of the lunch break.
 * @apiBody {Number} lunchBreakDuration Duration of the lunch break (in minutes).
 * @apiBody {String} teaBreakStartTime Start time of the tea break.
 * @apiBody {Number} teaBreakDuration Duration of the tea break (in minutes).
 *
 * @apiSuccess {String} res Response message.
 * @apiError (Error 500) DatabaseError Error if there was an error inserting into the database.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "Added timetable for <startDate> - <endDate>"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "err": "Error while inserting in DB"
 *     }
 */

// ------------------------------------------------------------------------------------------
// Department.
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /department/create Create Deapartment
 * @apiName AddDepartment
 * @apiDescription Adds a new Department.
 * @apiGroup Department
 *
 * @apiBody {String} name The name of the Department.
 * @apiBody {String} acronym The acronym of the Department.
 * @apiBody {Date} yearOfStarting The year of establishment of the Department.
 * @apiBody {connector.Schema.Types.ObjectId} accreditations The accreditation which is associated.
 * @apiBody {connector.Schema.Types.ObjectId} infrastructure The infrastructure which is associated.
 *
 * @apiSuccess {String} res added Department successfully.
 *
 * @apiError (Error 500) DatabaseError Error while inserting in the DB.
 *
 */

/**
 * @api {get} Department/list Listdown Department
 * @apiName GetDepartment
 * @apiDescription Listdown the Department.
 * @apiGroup Department
 *
 * @apiBody {String} [name] The name of the Department.
 * @apiBody {String} [acronym] The acronym of the Department.
 * @apiBody {Date} [yearOfStarting] The year of establishment of the Department.
 * @apiBody {connector.Schema.Types.ObjectId} [accreditations]  Accreditation which is associated.
 * @apiBody {connector.Schema.Types.ObjectId} [infrastructure] Infrastructure which is associated.
 *
 * @apiSuccess {Department[]} res Array of Filtered Department Doc .
 * @apiSuccess {String} department._id ID of document given by database.
 * @apiSuccess {String} department.name Name of Infrastructure
 * @apiSuccess {String} department.acronym The acronym of the Department.
 * @apiSuccess {Date} department.yearOfStarting The year of establishment of the Department.
 * @apiSuccess {connector.Schema.Types.ObjectId} department.accreditations associated Accreditation.
 * @apiSuccess {connector.Schema.Types.ObjectId} department.infrastructure associatedInfrastructure.
 * @apiError (Error 500) err Error while fetching the data.
 */

/**
 * @api {delete} /department/delete/:departmentId Delete Department
 * @apiName DeleteDepartment
 * @apiDescription Remove the existing Department.
 * @apiGroup Department
 *
 * @apiParam {String} departmentId The ID of the department document to delete.
 *
 * @apiSuccess {String} res "Department deleted successfully.
 *
 * @apiError (Error 500) err Error while deleting from DB.
 *
* */

/**
 * @api {post} /department/update Update department
 * @apiName UpdateDepartment
 * @apiGroup Department
 * @apiDescription Update Existing Department details except [yearOfStarting],[acronym]
 *
 * @apiSuccess {String} department._id ID of document given by database.
 * @apiSuccess {String} department.name Name of Infrastructure
 * @apiSuccess {String} department.acronym The acronym of the Department.
 * @apiSuccess {Date} department.yearOfStarting The year of establishment of the Department.
 * @apiSuccess {connector.Schema.Types.ObjectId} department.accreditations associated Accreditation.
 * @apiSuccess {connector.Schema.Types.ObjectId} department.infrastructure associatedInfrastructure.
 *
 * @apiSuccess {String} res updated infrastructure with id.
 * @apiError (Error 500) err Error while inserting in DB
 */

// ------------------------------------------------------------------------------------------
// Coursework
// ------------------------------------------------------------------------------------------

/**
 * @api {post} /coursework/add Add Coursework
 * @apiName AddCoursework
 * @apiGroup Coursework
 * @apiDescription Add a new coursework entry.
 *
 * @apiBody {ObjectId} student ID of the student (ObjectId).
 * @apiBody {String} Coursework type that is either onCampus or offCampus.
 * @apiBody {ObjectId} course ID of the Course in Coursework (ObjectId).
 * @apiBody {ObjectId} task ID of the task in Coursework (ObjectId).
 * @apiBody {String} objectID either its practicals or tutorial or assignment .
 * @apiBody {ObjectId} activity Id of the activity in Coursework.
 * @apiBody {Number} Marks in the Coursework.
 *
 * @apiSuccess {String} res Response message.
 * @apiError (Error 500) DatabaseError Err message if there is an error inserting into the database.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "Added coursework"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "err": "Error while inserting in DB"
 *     }
 */

/**
 * @api {delete} /timetable/delete/:timetableId Delete Timetable
 * @apiName DeleteTimetable
 * @apiGroup Timetable
 *
 * @apiParam {String} timetableId The ID of the timetable document to delete.
 *
 * @apiSuccess {String} res Success message indicating the deletion.
 *
 * @apiError (Error 500) DatabaseError Error message if there was an error during the deletion.
 */

/**
 * @api {delete} /coursework/delete/:courseworkId Delete Coursework
 * @apiName DeleteCoursework
 * @apiGroup Coursework
 *
 * @apiParam {String} courseworkId The ID of the Coursework document to delete.
 *
 * @apiSuccess {String} res Success message indicating the deletion.
 *
 * @apiError (Error 500) DatabaseError Error message if there was an error during the deletion.
 */

/**
 * @api {post} /timetable/update Update Timetable
 * @apiName UpdateTimetable
 * @apiGroup Timetable
 * @apiDescription Update existing timetable data.
 *
 * @apiBody {String} id ID of the timetable to be updated.
 * @apiBody {Date} [startDate] Start date of the timetable.
 * @apiBody {Date} [endDate] End date of the timetable.
 * @apiBody {ObjectId} [classIncharge] ID of the faculty in charge (ObjectId).
 * @apiBody {ObjectId} [group] ID of the group (ObjectId).
 * @apiBody {ObjectId} [activityBlueprints] ID of activity blueprint (ObjectId).
 * @apiBody {String} [lunchBreakStartTime] Start time of the lunch break.
 * @apiBody {Number} [lunchBreakDuration] Duration of lunch break (in minutes).
 * @apiBody {String} [teaBreakStartTime] Start time of tea break.
 * @apiBody {Number} [teaBreakDuration] Duration of tea break (in minutes).
 *
 * @apiSuccess {String} res Timetable updated.
 */

/**
 * @api {post} /coursework/update Update Coursework
 * @apiName UpdateCoursework
 * @apiGroup Coursework
 * @apiDescription Update existing coursework data.
 *
 * @apiBody {String} id ID of the Coursework to be updated.
 * @apiBody {ObjectId} student ID of the student (ObjectId).
 * @apiBody {String} Coursework type that is either onCampus or offCampus.
 * @apiBody {ObjectId} course ID of the Course in Coursework (ObjectId).
 * @apiBody {ObjectId} task ID of the task in Coursework (ObjectId).
 * @apiBody {String} objectID either its practicals or tutorial or assignment .
 * @apiBody {ObjectId} activity Id of the activity in Coursework.
 * @apiBody {Number} Marks in the Coursework.
 *
 * @apiSuccess {String} res Coursework updated.
 * @apiError (Error 500) DatabaseError Error in updating the database.
 */

/**
 * @api {get} /timetable/list Get Timetable List
 * @apiName GetTimetableList
 * @apiGroup Timetable
 *
 * @apiQuery {Date} [startDate] Start date of the timetable.
 * @apiQuery {Date} [endDate] End date of the timetable.
 * @apiQuery {ObjectId} [classIncharge] ID of the faculty in charge (ObjectId).
 * @apiQuery {ObjectId} [group] ID of the group (ObjectId).
 * @apiQuery {ObjectId} [activityBlueprints] ID of the activity blueprint (ObjectId).
 * @apiQuery {String} [lunchBreakStartTime] Start time of the lunch break.
 * @apiQuery {Number} [lunchBreakDuration] Duration of the lunch break (in minutes).
 * @apiQuery {String} [lunchBreakStartTime] Start time of the lunch break.
 * @apiQuery {Number} [lunchBreakDuration] Duration of the lunch break (in minutes).
 *
 * @apiSuccess {Timetable[]} res Array of filtered timetable documents.
 * @apiSuccess {String} timetable._id ID of the timetable document given by the database.
 * @apiSuccess {Date} timetable.startDate Start date of the timetable.
 * @apiSuccess {Date} timetable.endDate End date of the timetable.
 * @apiSuccess {ObjectId} timetable.classIncharge ID of the faculty in charge (ObjectId).
 * @apiSuccess {ObjectId} timetable.group ID of the group (ObjectId).
 * @apiSuccess {ObjectId} timetable.activityBlueprints ID of the activity blueprint (ObjectId).
 * @apiSuccess {String} timetable.lunchBreakStartTime Start time of the lunch break.
 * @apiSuccess {Number} timetable.lunchBreakDuration Duration of the lunch break (in minutes).
 * @apiSuccess {String} timetable.teaBreakStartTime Start time of the tea break.
 * @apiSuccess {Number} timetable.teaBreakDuration Duration of the tea break (in minutes).
 */

/**
 * @api {get} /coursework/list Get Coursework List
 * @apiName GetCourseworkList
 * @apiGroup Coursework
 *
 * @apiQuery {ObjectId} student ID of the student (ObjectId).
 * @apiQuery {String} Coursework type that is either onCampus or offCampus.
 * @apiQuery {ObjectId} course ID of the Course in Coursework (ObjectId).
 * @apiQuery {ObjectId} task ID of the task in Coursework (ObjectId).
 * @apiQuery {String} objectID either its practicals or tutorial or assignment .
 * @apiQuery {ObjectId} activity Id of the activity in Coursework.
 * @apiQuery {Number} Marks in the Coursework.
 *
 * @apiSuccess {Coursework[]} res Array of filtered coursework documents.
 * @apiSuccess {String} coursework._id ID of the coursework document given by the database.
 * @apiSuccess {ObjectId} coursework.student ID of the student (ObjectId).
 * @apiSuccess {String} coursework.type Coursework type that is either onCampus or offCampus.
 * @apiSuccess {ObjectId} coursework.course ID of the Course in Coursework (ObjectId).
 * @apiSuccess {ObjectId} coursework.task ID of the task in Coursework (ObjectId).
 * @apiSuccess {String} coursework.objectID objectID either Practicals or Tutorial or Assignment .
 * @apiSuccess {ObjectId} coursework.activity Id of the activity in Coursework.
 * @apiSuccess {Number} coursework.marks Marks in the Coursework.
 */

// ------------------------------------------------------------------------------------------
// Module.
// ------------------------------------------------------------------------------------------

/**
 * @api {get} module/list Get Module List
 * @apiName GetModule
 * @apiGroup Module
 *
 * @apiQuery {Number} [no] Module number.
 * @apiQuery {String} [name] Name of the module.
 * @apiQuery {String} [outcome] Module outcome.
 * @apiQuery {String[]} [contents] Array of contents of the module.
 * @apiQuery {Number} [hrsPerModule] Number of hours required per module.
 * @apiQuery {String[]} [cognitiveLevels] Array of cognitive levels
 * of attainment as per Bloom's Taxanomy (L1-L6).
 *
 * @apiSuccess {module[]} res Array of Filtered module Doc.
 * @apiSuccess {String} module._id ID of document given by database.
 * @apiSuccess {String} module.no Module number.
 * @apiSuccess {String} module.name Name of the module.
 * @apiSuccess {String} module.outcome Module outcome.
 * @apiSuccess {String[]} module.contents Array of contents of the module.
 * @apiSuccess {Number} module.hrsPerModule Number of hours required per module.
 * @apiSuccess {String[]} module.cognitiveLevels Array of cognitive levels of
 * attainment as per Bloom's Taxanomy (L1-L6).
 */

// ------------------------------------------------------------------------------------------
// Paper.
// ------------------------------------------------------------------------------------------
//
/**
 * @api {post} /paper/add Add Paper
 * @apiName AddPaper
 * @apiDescription Adds a new Paper.
 * @apiGroup Paper
 *
 * @apiBody {String} [answersheetID] The id of the Answersheet.
 * @apiBody {connector.Schema.Types.ObjectId} Exam The Exam which is associated.
 * @apiBody {connector.Schema.Types.ObjectId} Student The Student which is associated.
 * @apiBody {connector.Schema.Types.ObjectId} Faculty The Faculty which is associated.
 * @apiBody {Number} [marks] marks in the paper.
 *
 * @apiSuccess {String} res added Paper successfully.
 *
 * @apiError (Error 500) DatabaseError Error while inserting in the DB.
 *
 */

/**
 * @api {get} /paper/list Listdown Paper
 * @apiName GetPaper
 * @apiDescription Listdown the Paper.
 * @apiGroup Paper
 *
 * @apiQuery {String} [answersheetID] The id of the Answersheet.
 * @apiQuery {connector.Schema.Types.ObjectId} Exam The Exam which is associated.
 * @apiQuery {connector.Schema.Types.ObjectId} Student The Student which is associated.
 * @apiQuery {connector.Schema.Types.ObjectId} Faculty The Faculty which is associated.
 * @apiQuery {Number} [marks] marks in the paper.
 *
 * @apiSuccess {Paper[]} res Array of Filtered Paper Doc.
 * @apiSuccess {String} paper._id ID of paper given by database.
 * @apiSuccess {String} paper.answersheetID ID of answersheet.
 * @apiSuccess {connector.Schema.Types.ObjectId} paper.exam associated Exam.
 * @apiSuccess {connector.Schema.Types.ObjectId} paper.student associated Student.
 * @apiSuccess {connector.Schema.Types.ObjectId} paper.faculty associated Faculty.
 * @apiSuccess {Number} paper.marks The marks in the Paper.
 * @apiError (Error 500) err Error while fetching the data.
 */

/**
 * @api {delete} /paper/delete/:id Delete Paper
 * @apiName DeletePaper
 * @apiDescription Remove the existing Paper.
 * @apiGroup Paper
 *
 * @apiParam {String} answersheetID The ID of the answersheet to delete.
 *
 * @apiSuccess {String} res Paper deleted successfully.
 *
 * @apiError (Error 500) err Error while deleting from DB.
 *
* */

/**
 * @api {post} /paper/update/ Update Paper
 * @apiName UpdatePaper
 * @apiGroup Paper
 * @apiDescription Update Existing Paper details except 
 *
 * @apiSuccess {Paper[]} res Array of Filtered Paper Doc .
 * @apiSuccess {String} paper._id ID of paper given by database.
 * @apiSuccess {String} paper.answersheetID Name of Infrastructure
 * @apiSuccess {connector.Schema.Types.ObjectId} paper.exam associated Exam.
 * @apiSuccess {connector.Schema.Types.ObjectId} paper.student associated Student.
 * @apiSuccess {connector.Schema.Types.ObjectId} paper.faculty associated Faculty.
 * @apiSuccess {Number} paper.marks The marks in the Paper.
 * 
 * @apiSuccess {String} res Paper updated successfully.
 * 
 * @apiError (Error 500) err Error while updating the data.s
 */