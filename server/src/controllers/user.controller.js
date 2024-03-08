import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from fromtend
  // validation
  // check if user already exists
  // check for images, check for avatar
  // upload to cloudinary
  // create user object - creat entry in db
  // remove password and refresh token from response
  // check for user creation
  // return response

  const { fullname, username, email, phone, password } = req.body;
  console.log("email: ", email);

  if (
    [fullname, username, email, phone, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { phone }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, `Email or Phone number or username  has been used`);
  }

  let avatarLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  ) {
    avatarLocalPath = req.files.avatar[0].path;
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const user = await User.create({
    fullname,
    avatar: avatar?.url || "",
    email,
    phone,
    username,
    password,
  });

  const createdUser = User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, `Something went wrong while registering the user`);
  }

  return res.status(201).json(new ApiResponse(200));
});

export { registerUser };
