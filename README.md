Mailto: and tel:
The mailto: and tel: schemes used within the href attribute of an <a> tag in HTML define how browsers handle links to email addresses and telephone numbers, respectively. These schemes tell the browser to open the default email client or dialer app when a user clicks on the link, facilitating direct communication with the contact. Here's a breakdown of each:

mailto:
Purpose: Opens the user's default email client with a new message window, prefilling the recipient's email address.
Usage: <a href="mailto:example@example.com">Send Email</a>
Additional Options: Can include subject, body, CC, and BCC in the link. For example, to add a subject and body: mailto:example@example.com?subject=Hello&body=Your%20message%20here. Note that spaces in the subject or body need to be encoded as %20 or replaced with +.
tel:
Purpose: Triggers the device's default phone dialer application with the specified phone number, ready to call. This is especially useful on mobile devices.
Usage: <a href="tel:+1234567890">Call Us</a>
Format: The phone number should be in international format (prefixed with a + and country code) for best compatibility across devices. Spaces and other separators are typically ignored by dialers, but it's common to remove them to avoid potential issues.
Practical Considerations
User Experience: These links offer a smoother user experience by facilitating immediate action, like writing an email or making a call, directly from the browser.
Accessibility: For users on mobile devices or those using email clients configured on their computers, these links can significantly streamline the process of contacting someone.
Spam Consideration: Be mindful that publicly displaying email addresses, even in a mailto: link, can expose them to being harvested by spammers. Some websites use forms or other methods to hide addresses or use JavaScript to obfuscate mailto: links.
By incorporating mailto: and tel: links in your HTML documents, you can provide a more interactive and user-friendly experience, directly connecting your visitors with email and phone communication channels.

#########################

Description Lists
For lists of terms and their descriptions, use <dl> for the list container, <dt> for each term, and <dd> for each description:

<dl>
  <dt>Term 1</dt>
  <dd>Description of Term 1</dd>
  <dt>Term 2</dt>
  <dd>Description of Term 2</dd>
</dl>

This structure is especially useful for glossaries, metadata presentations, or any scenario where a term is paired with a description​​.

#########################

ID can only be used once per element
https://forum.freecodecamp.org/t/why-should-i-use-id-instead-of-class/673261 