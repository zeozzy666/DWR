/*------------------------------------------------------------------------------------------------------/
| Script Name   : WTUB:PRISM/PROJECT/PROJECT/PRO
| Event         : WorkflowTaskUpateBefore
| Author: Fouad Ishac - fishac@accela.com
| Changes: 
| 08/04/2016 - Initial script
/------------------------------------------------------------------------------------------------------*/

//Rule to make sure that all tasks are closed before closing the project
if ("Project Complete".equals(wfStatus))
{
	var isActive = false;
	var wf = aa.workflow.getTaskItemByCapID(capId,null).getOutput();
	for (w in wf)
	{
		var aFlag = wf[w].getActiveFlag();
		if ("Y".equals(aFlag))
		{
			isActive = true;
		}
	}
	if (isActive)
	{
			showMessage = true;
			cancel = true;
			comment("There are still active tasks. Please close all tasks before closing Project");
	}
}

//Make sure all acquisitions are closed or have ROE before ceritifying
if ("Project Certified".equals(wfStatus))
{
	var acq4Level = "PRISM/Project/Acquisition/ACQ";
	var childRecords = getChildren(acq4Level, capId);

	//Loop through child records and checking to make sure they are closed or have ROE checked
	var dontClose = false;
	var openRecords = "";
	for (c in childRecords)
	{
		var thisCapId = childRecords[c];
		var thisCap = aa.cap.getCap(thisCapId).getOutput();
		var thisCapStatus = thisCap.getCapStatus();
		var ROE = getAppSpecific("ROE", thisCapId);

		if (!"Closed".equals(thisCapStatus) && !"CHECKED".equals(ROE))
		{
			dontClose = true;
			openRecords += thisCapId.getCustomID() + "\n"
		}
	}
	if (dontClose)
	{
		comment("Please make sure all the following records are closed or you have sufficient ROE:\n" + openRecords);
		showMessage = true;
		cancel = true;
	}
}