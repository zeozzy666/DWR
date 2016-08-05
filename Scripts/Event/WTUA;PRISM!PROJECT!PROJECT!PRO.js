/*------------------------------------------------------------------------------------------------------/
| Script Name   : WTUA:PRISM/PROJECT/PROJECT/PRO
| Event         : WorkflowTaskUpateAfter
| Author: Fouad Ishac - fishac@accela.com
| Changes: 
| 08/04/2016 - Initial script
/------------------------------------------------------------------------------------------------------*/

//Create an EIP record if user selects EIP
if ("EIP".equals(wfStatus))
{
    //Create the EIP record
    eipCapID = createCap("PRISM/Project/Early Implementation Plan/EIP","");

    //Attach as child
    lResult = aa.cap.createAppHierarchy(capId, eipCapID);
    if(!lResult.getSuccess())
    {
        logDebug("Problem creating child record " + capId.getCustomID());
    }
    else
    {
        logDebug("Successfully created child record for " + capId.getCustomID());
    }
}
//Create a Damage report record 
else if ("Damages Exists".equals(wfStatus))
{
    //Create the Damages record
    dCapID = createCap("PRISM/Project/Damage Report/DAM","");

    //Attach as child
    lResult = aa.cap.createAppHierarchy(capId, dCapID);
    if(!lResult.getSuccess())
    {
        logDebug("Problem creating child record " + capId.getCustomID());
    }
    else
    {
        logDebug("Successfully created child record for " + capId.getCustomID());
    }
}
//create a RAP Record
else if ("RAP Required".equals(wfStatus))
{
    //Create the RAP record
    rCapID = createCap("PRISM/Project/Relocation Assistance Program/RAP","");

    //Attach as child
    lResult = aa.cap.createAppHierarchy(capId, rCapID);
    if(!lResult.getSuccess())
    {
        logDebug("Problem creating child record " + capId.getCustomID());
    }
    else
    {
        logDebug("Successfully created child record for " + capId.getCustomID());
    }
}
//Create Acquisition record and attach as child
else if ("Acquisitions Required".equals(wfStatus))
{
    //Create the RAP record
    aCapID = createCap("PRISM/Project/Acquisition/ACQ","");

    //Attach as child
    lResult = aa.cap.createAppHierarchy(capId, aCapID);
    if(!lResult.getSuccess())
    {
        logDebug("Problem creating child record " + capId.getCustomID());
    }
    else
    {
        logDebug("Successfully created child record for " + capId.getCustomID());
    }
}
//Create Encumbrances record and attach
else if ("Encumbrances to be Cleared".equals(wfStatus))
{
    //Create the RAP record
    eCapID = createCap("PRISM/Project/Encumbrances/ENC","");

    //Attach as child
    lResult = aa.cap.createAppHierarchy(capId, eCapID);
    if(!lResult.getSuccess())
    {
        logDebug("Problem creating child record " + capId.getCustomID());
    }
    else
    {
        logDebug("Successfully created child record for " + capId.getCustomID());
    }
}