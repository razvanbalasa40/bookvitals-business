import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const firestore = admin.firestore();

export const sendFeedbackMailOnCall = functions
  .runWith({
    timeoutSeconds: 60,
  })
  .https.onCall(async (data) => {
    await firestore.collection('mails').add({
      to: 'hello@bookvitals.com',
      from: data.from,
      replyTo: data.replyTo,
      template: {
        name: 'bookvitals-contact-mail',
        data: {
          username: data.username,
          originalSubject: data.originalSubject,
          originalMessage: data.originalMessage,
        },
      },
    });

    return true;
  });
