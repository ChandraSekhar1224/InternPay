function calculate(){
    let res=0;
    let formula="";
    let e1=document.getElementById("input_cat");
    let value1=e1.value;
    let text1=e1.options[e1.selectedIndex].text;
    let e2=document.getElementById("output_cat");
    let value2=e2.value;
    let text2=e2.options[e2.selectedIndex].text;
    let input=document.getElementById("input").value;
    let output=document.getElementById("output");
    let res_desc=document.getElementById("res");
    if(text1=="Millimeter")
    {
        if(text2=="Millimeter")
        {
            res=input;
            formula="1 Millimeter = 1 Millimeter";
        }
        else if(text2=="Centimeter")
        {
            res=input/10;
            formula="1 Millimeter = 0.1 Centimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input/100;
            formula="1 Millimeter = 0.01 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input/1000;
            formula="1 Millimeter = 0.001 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/1e+6;
            formula="1 Millimeter = 1e-6 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input/304.8;
            formula="1 Millimeter = 0.0032 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input/25.4;
            formula="1 Millimeter = 0.039 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input/1.609e+6;
            formula="1 Millimeter = 6.2137e-7 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input/914.4;
            formula="1 Millimeter = 0.001 Yard";
        }
    }

    else if(text1=="Centimeter")
    {
        if(text2=="Centimeter")
        {
            res=input;
            formula="1 Centimeter = 1 Centimeter";
        }
        else if(text2=="Millimeter")
        {
            res=input*10;
            formula="1 Centimeter = 10 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input/10;
            formula="1 Centimeter = 0.1 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input/100;
            formula="1 Centimeter = 0.01 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/100000;
            formula="1 Centimeter = 1e-5 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input/30.48;
            formula="1 Centimeter = 0.0328 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input/2.54;
            formula="1 Centimeter = 0.0393 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input/160900;
            formula="1 Centimeter = 6.2137e-6 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input/91.44;
            formula="1 Centimeter = 0.0109 Yard";
        }
    }

    else if(text1=="Decimeter")
    {
        if(text2=="Decimeter")
        {
            res=input;
            formula="1 Decimeter = 1 Decimeter";
        }
        else if(text2=="Millimeter")
        {
            res=input*100;
            formula="1 Decimeter = 100 Millimeter";
        }
        else if(text2=="Centimeter") 
        {
            res=input*10;
            formula="1 Decimeter = 10 Centimeter";
        }
        else if(text2=="Meter") 
        {
            res=input/10;
            formula="1 Decimeter = 0.1 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/10000;
            formula="1 Decimeter = 1e-4 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input/3.048;
            formula="1 Decimeter = 0.328 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input/3.937;
            formula="1 Decimeter = 3.9370 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input/16090;
            formula="1 Decimeter = 6.2137e-5 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input/9.144;
            formula="1 Decimeter = 0.1093 Yard";
        }
    }

    else if(text1=="Meter")
    {
        if(text2=="Meter")
        {
            res=input;
            formula="1 Meter = 1 Meter";
        }
        else if(text2=="Millimeter")
        {
            res=input*1000;
            formula="1 Meter = 1000 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input*10;
            formula="1 Meter = 10 Decimeter";
        }
        else if(text2=="Centimeter") 
        {
            res=input*100;
            formula="1 Meter = 100 Centimeter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/1000;
            formula="1 Meter = 0.001 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input*3.281;
            formula="1 Meter = 3.2808 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input*39.37;
            formula="1 Meter = 39.3701 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input/1609;
            formula="1 Meter = 0.0006 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input*1.094;
            formula="1 Meter = 1.0936 Yard";
        }
    }

    else if(text1=="Kilometer")
    {
        if(text2=="Kilometer")
        {
            res=input;
            formula="1 Kilometer = 1 Kilometer";
        }
        else if(text2=="Millimeter")
        {
            res=input*1e+6;
            formula="1 Kilometer = 1e+6 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input*10000;
            formula="1 Kilometer = 10000 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input*1000;
            formula="1 Kilometer = 1000 Meter";
        }
        else if(text2=="Centimeter") 
        {
            res=input*100000;
            formula="1 Kilometer = 100000 Centimeter";
        }
        else if(text2=="Foot") 
        {
            res=input*3281;
            formula="1 Kilometer = 3280.84 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input/2.54;
            formula="1 Kilometer = 0.0393 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input*39370;
            formula="1 Kilometer = 39370.1 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input*1094;
            formula="1 Kilometer = 1093.61 Yard";
        }
    }

    else if(text1=="Foot")
    {
        if(text2=="Foot")
        {
            res=input;
            formula="1 Foot = 1 Foot";
        }
        else if(text2=="Millimeter")
        {
            res=input*304.8;
            formula="1 Foot = 304.8 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input*3.048;
            formula="1 Foot = 3.048 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input/3.281;
            formula="1 Foot = 0.3048 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/3281;
            formula="1 Foot = 0.0003 Kilometer";
        }
        else if(text2=="Centimeter") 
        {
            res=input*30.48;
            formula="1 Foot = 30.48 Centimeter";
        }
        else if(text2=="Inch") 
        {
            res=input*12;
            formula="1 Foot = 12 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input/5280;
            formula="1 Foot = 0.0001 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input/3;
            formula="1 Foot = 0.3333 Yard";
        }
    }

    else if(text1=="Inch")
    {
        if(text2=="Inch")
        {
            res=input;
            formula="1 Inch = 1 Inch";
        }
        else if(text2=="Millimeter")
        {
            res=input*25.4;
            formula="1 Inch = 25.4 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input/3.937;
            formula="1 Inch = 0.254 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input/39.37;
            formula="1 Inch = 0.0254 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/39370;
            formula="1 Inch = 2.54e-5 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input/12;
            formula="1 Inch = 0.08333 Foot";
        }
        else if(text2=="Centimeter") 
        {
            res=input*2.54;
            formula="1 Inch = 2.54 Centimeter";
        }
        else if(text2=="Mile") 
        {
            res=input/63360;
            formula="1 Inch = 1.5783e-5 Mile";
        }
        else if(text2=="Yard") 
        {
            res=input/36;
            formula="1 Inch = 0.0277 Yard";
        }
    }

    else if(text1=="Mile")
    {
        if(text2=="Mile")
        {
            res=input;
            formula="1 Mile = 1 Mile";
        }
        else if(text2=="Millimeter")
        {
            res=input*1.609e+6;
            formula="1 Mile = 1.609e+6 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input*16090;
            formula="1 Mile = 16093.4 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input*1609;
            formula="1 Mile = 1609.3399 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input*1.609;
            formula="1 Mile = 1.609 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input*5280;
            formula="1 Mile = 5279.98 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input*63360;
            formula="1 Mile = 63360 Inch";
        }
        else if(text2=="Centimeter") 
        {
            res=input*160900;
            formula="1 Mile = 160934 Centimeter";
        }
        else if(text2=="Yard") 
        {
            res=input*1760;
            formula="1 Mile = 1760 Yard";
        }
    }

    else if(text1=="Yard")
    {
        if(text2=="Yard")
        {
            res=input;
            formula="1 Yard = 1 Yard";
        }
        else if(text2=="Millimeter")
        {
            res=input*914.4;
            formula="1 Yard = 914.4 Millimeter";
        }
        else if(text2=="Decimeter") 
        {
            res=input*9.144;
            formula="1 Yard = 9.144 Decimeter";
        }
        else if(text2=="Meter") 
        {
            res=input/1.094;
            formula="1 Yard = 0.9144 Meter";
        }
        else if(text2=="Kilometer") 
        {
            res=input/1094;
            formula="1 Yard = 0.00091 Kilometer";
        }
        else if(text2=="Foot") 
        {
            res=input*3;
            formula="1 Yard = 3 Foot";
        }
        else if(text2=="Inch") 
        {
            res=input*36;
            formula="1 Yard = 36 Inch";
        }
        else if(text2=="Mile") 
        {
            res=input/1760;
            formula="1 Yard = 0.00056 Mile";
        }
        else if(text2=="Centimeter") 
        {
            res=input*91.44;
            formula="1 Yard = 91.4400 Centimeter";
        }
    }

    res=res.toFixed(7);
    output.value=res;
    if(input=="")
        text="";
    else
        text=input+" "+text1+" = "+res+" "+text2+"..."+"\nFormula:  "+formula;
    res_desc.innerHTML=text;
}