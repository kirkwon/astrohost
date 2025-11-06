
import React from 'react';
import { getAuth, linkWithCredential } from "firebase/auth";

// IMPORTANT: This is a template component. You will need to adapt it to your
// specific authentication providers and data-merging logic.

/**
 * A component to handle linking a user's account with another provider.
 * This is useful when a user signs in with one method (e.g., Google) and then
 * tries to sign in with another method (e.g., email/password) using the same
 * email address.
 */
const AccountLinker = ({ user, originalCredential }) => {
  const auth = getAuth();

  const handleLinkAccount = async () => {
    if (!user || !originalCredential) {
      console.error("User and original credential are required for account linking.");
      return;
    }

    try {
      // Link the new credential to the existing user account.
      const result = await linkWithCredential(user, originalCredential);
      console.log("Accounts linked successfully:", result.user);

      // **CUSTOM DATA-MERGING LOGIC HERE**
      // After linking, you might have data from the "anonymous" or temporary user
      // that you want to merge into the primary user's data.
      //
      // This is where you would call your custom data-merging function.
      // The example `repo.merge` is a placeholder for your implementation.
      //
      // For example:
      // await repo.merge(result.user, anonymousUser.uid);

      alert("Your accounts have been successfully linked!");

    } catch (error) {
      console.error("Error linking accounts:", error);

      // Handle specific errors, e.g., if the credential has already been used.
      if (error.code === 'auth/credential-already-in-use') {
        alert("This account is already linked to another user.");
      } else {
        alert("An error occurred while linking your accounts. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Link Account</h2>
      <p>
        It looks like you've signed in before with a different method.
        Would you like to link your accounts?
      </p>
      <button onClick={handleLinkAccount}>
        Yes, link my accounts
      </button>
    </div>
  );
};

export default AccountLinker;
