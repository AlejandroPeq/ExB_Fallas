"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[56468],{56468:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>g,anyOfValues:()=>x,bubbleChartValidateMsg:()=>E,default:()=>F,defaultError:()=>i,defaultInvalidChart:()=>l,duplicateSeriesID:()=>u,enumValues:()=>P,gaugeCannotExceedLimit:()=>b,histogramEmptyField:()=>y,invalidSeriesType:()=>v,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>q,lineChartSeriesAndMarkersCannotExceedLimit:()=>k,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>s,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>$,or:()=>I,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>f,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>S,requiredProperty:()=>C,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="אירעה שגיאה במהלך טעינת התרשים.",r='קיימות בסה"כ ${ elementCount } עמודות בתרשים זה. תרשימי עמודות עם סדרה אחת מוגבלים ל-${ totalLimit } עמודות. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.',n="תרשימי עמודות עם שתי סדרות מוגבלים ל-${ totalLimit } עמודות, או ל-${ seriesLimit } עמודות בכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.",o="תרשימי עמודות עם שלוש סדרות או יותר מוגבלים ל-${ totalLimit } עמודות, או ל-${ seriesLimit } עמודות לכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.",l="אירעה שגיאה ביצירת התרשים.",s="לא ניתן לבצע טרנספורמציה לוגריתמית על ערכים שליליים או על אפס.",d="לא ניתן לבצע טרנספורמציה של שורש ריבועי על ערכים שליליים.",m="אירעה שגיאה במהלך טעינת השכבה. URL = ${ url }. מזהה פריט פורטל =${ portalItemId }.",u="${ dataPath } חייב/ת להיות ייחודי/ת. לסדרה בשם ${ seriesName } יש מזהה (${ seriesID }) שבו משתמשת כבר סדרה אחרת.",$="ל-${ dataPath } אסור לבצע צבירה שאינה ספירה על שדה לא מספרי.",C="ב-${ dataPath } חסר מאפיין בשם ${ missingProperty }.",h="${ dataPath } לא יכול להיות קצר יות מ-${ limit } תווים.",c="ל-${ dataPath } לא יכולים להיות פחות מ-${ limit } פריטים.",L="ל-${ dataPath } לא יכולים להיות יותר מ-${ limit } פריטים.",p="ל-${ dataPath } חייב להיות לפחות תו אחד שאינו רווח בלתי נראה.",g="ל-${ dataPath } אסור לכלול ${ additionalProperty }.",P="${ dataPath } חייב להיות שווה לאחד מהערכים המותרים הבאים: ${ allowedValues }.",x="${ dataPath } חייב להתאים לסכמה של אחד מאלה: ${ schemaOptions }.",E="תרשים פיזור עם סמלים פרופורציונליים לא נתמך. הוחל גודל סמל שמוגדר כברירת מחדל.",S="קריאת נתוני הקלט נכשלה.",y="היסטוגרמות חייבות לכלול לפחות שני ערכים מספריים.",v="סוג הסדרה הצפוי במדד ${ seriesIndex } הוא '${ expectedType }', אבל במקום זאת התקבל '${ receivedType }'.",I="או",f="הבטח שהסכום הכולל של השדה/ות המספריים שנבחרו יחזירו רק ערכים חיוביים או רק נתונים שליליים.",V='קיימות בסה"כ ${ sliceCount } פרוסות בתרשים זה. תרשימי עוגה מוגבלים ל-${ totalLimit } פלחים. בחר שדה קטגוריה עם פחות ערכים ייחודיים, הוסף פחות שדות מספריים או החל מסנן על הנתונים שלך.',b="מדים מבוססי-ישויות מוגבלים ל-${ totalLimit } ישויות. סנן את הנתונים.",k="תרשים זה כולל ${ seriesCount } סדרות ו-${ elementCount } נקודות נתונים. תרשימי קווים מוגבלים ל-${ seriesLimit } סדרות ו-${ totalLimit } נקודות נתונים. הקטן את מספר הסדרות ו/או צבור מחדש או סנן את הנתונים שלך.",q="תרשימי קווים מוגבלים ל-${ totalLimit } נקודות נתונים. סנן או צבור מחדש את הנתונים שלך ונסה שוב.";var F={defaultError:"אירעה שגיאה במהלך טעינת התרשים.",uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"אירעה שגיאה ביצירת התרשים.",negativeValueInDataForLogTransformation:"לא ניתן לבצע טרנספורמציה לוגריתמית על ערכים שליליים או על אפס.",negativeValueInDataForSqrtTransformation:"לא ניתן לבצע טרנספורמציה של שורש ריבועי על ערכים שליליים.",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:"ל-${ dataPath } אסור לבצע צבירה שאינה ספירה על שדה לא מספרי.",requiredProperty:C,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:p,additionalProperty:"ל-${ dataPath } אסור לכלול ${ additionalProperty }.",enumValues:P,anyOfValues:x,bubbleChartValidateMsg:E,queryError:"קריאת נתוני הקלט נכשלה.",histogramEmptyField:"היסטוגרמות חייבות לכלול לפחות שני ערכים מספריים.",invalidSeriesType:v,or:"או",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"הבטח שהסכום הכולל של השדה/ות המספריים שנבחרו יחזירו רק ערכים חיוביים או רק נתונים שליליים.",pieChartSlicesCannotExceedLimit:V,gaugeCannotExceedLimit:b,lineChartSeriesAndMarkersCannotExceedLimit:k,lineChartMarkersCannotExceedLimit:"תרשימי קווים מוגבלים ל-${ totalLimit } נקודות נתונים. סנן או צבור מחדש את הנתונים שלך ונסה שוב."}}}]);