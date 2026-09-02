const {auth} = require("firebase-functions/v1");
const admin = require("firebase-admin");
admin.initializeApp();
exports.CreateUserProfile = auth.user().onCreate( async (user) => {
  const uid = user.uid;
  const email = user.email;
  await admin.firestore().collection("users").doc(uid).set({
    email: email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    role: "member",
  });
  console.log(`Profil crée pour ${email}`);
});
