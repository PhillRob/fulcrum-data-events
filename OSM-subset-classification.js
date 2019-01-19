//display a subset of classification options based on selected item in classification list
function filterworkorder(event) {
    // if something was changed in issue type check if one of the following strings is found in the field
    if(CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["damaged"]) || CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["missing"]))
    {
        SETCHOICEFILTER('work_order_', ['identify - تحديد', 'repair - إصلاح', 'replace - استبدال'])
    }
    else if(CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["dirty"]) || CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["waste"]))
    {
        SETCHOICEFILTER('work_order_', ['remove - إزالة', 'clean - تنظيف'])
    }
    else if(CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["paint"]))
    {
        SETCHOICEFILTER('work_order_', ['identify - تحديد', 'paint - دهان'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["dead"]))
    {
        SETCHOICEFILTER('work_order_', ['identify - تحديد', 'replace - استبدال'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["irrigat"]))
    {
        SETCHOICEFILTER('work_order_', ['identify - تحديد', 'irrigate - ري'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["not fertilised"]))
    {
        SETCHOICEFILTER('work_order_', ['identify - تحديد', 'fertilise - إضافة سماد'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["pest"]))
    {
        SETCHOICEFILTER('work_order_', ['identify - تحديد', 'spray - رش'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["staking"]) || CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["binding"]))
    {
    SETCHOICEFILTER('work_order_', ['repair - إصلاح', 'replace - استبدال'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["no power"]) || CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["no water"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','repair - إصلاح'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["compacted"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','decompact - شقرفه'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["excess"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["exposed"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','repair - إصلاح'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["graffiti"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','clean - تنظيف','paint - دهان'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["campfire"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','clean - تنظيف','remove - إزالة','repair - إصلاح'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["lighting"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','repair - إصلاح'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["chemical"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','spray - رش'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["no tree berm"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','adjust - إعادة ضبط'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["not fixed"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','adjust - إعادة ضبط','fix - تثبيت','repair - إصلاح'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["not pruned"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','prune - تشذيب'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["not readable"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','clean - تنظيف','paint - دهان','repair - إصلاح','replace - استبدال'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["poor health"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','fertilise - إضافة سماد','irrigate - ري','remove - إزالة','replace - استبدال','prune - تشذيب'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["poor structure"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','fertilise - إضافة سماد','irrigate - ري','remove - إزالة','replace - استبدال','prune - تشذيب'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["removed without"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','replace - استبدال'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["sediments"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','clean - تنظيف'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["spreading"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','trim - تشذيب','clean - تنظيف'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["staking"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','trim - تشذيب','binding - ربط'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["sucker"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','trim - تشذيب'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["weed"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','trim - تشذيب'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["blocked"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','clean - تنظيف'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["erosion"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','adjust - إعادة ضبط','decompact - شقرفه','protect - حماية','replace - استبدال'])
    }
    else if (CONTAINS(LOWER(FORMAT(CHOICEVALUES($issue_type_))), ["leakage"]))
    {
    SETCHOICEFILTER('work_order_', ['identify - تحديد','remove - إزالة','adjust - إعادة ضبط','protect - حماية','replace - استبدال'])
    }
    else
    {
    //do nothing
    SETCHOICEFILTER('work_order_',null)
    } 
};
ON('change', 'issue_type_', filterworkorder);