import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema(
    {
      username:{
        type:String,
        required:true,
        unique:true,
      },
      email:{
        type:String,
        required:true,
        unique:true,
      },
      password:{
        type: String,
        required:true,
      },
      profilePicture:{
        type:String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fpeoples-avatars%2Fdefault-profile-picture-male-icon.png&tbnid=iW-FSq2ro8IDTM&vet=12ahUKEwjphZ6LrdOEAxWTTqQEHS2xCyYQMygJegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fuxwing.com%2Fdefault-profile-picture-male-icon%2F&docid=4dYJsNXJ3jLinM&w=512&h=512&q=profile%20image&ved=2ahUKEwjphZ6LrdOEAxWTTqQEHS2xCyYQMygJegUIARCEAQ",
      },
  }, {timestamps:true}
);

const User = mongoose.model('User', userSchema);

export default User