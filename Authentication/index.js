const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw,salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, 12);
    // console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw , hashedPw);
    if(result) {
        console.log('Correct Password')
    }
    else{
        console.log('Incorrect Password')
    }
}

// hashPassword('monkey');

login('monkey', '$2b$12$3vi14RfUmlLhp9fKax/xduALBE3DcoGhUccl9ASROiRN524AvNBVK')