dark mode light mode
making the inputbox component have the other needed features of input types
new id renaming or auto id giving to enties                                                          





:root[data-theme="light"] {
  /* Base colors */
  --text: hsl(0, 0%, 10%);                
  --background: hsl(0, 0%, 98%);          

  /* Button (unique floating/up button) */
  --upbutton: hsl(210, 100%, 45%);        

  /* Card backgrounds */
  --card: hsl(0, 0%, 90%);                

  /* Action buttons inside cards */
  --agree: hsl(120, 45%, 45%);            
  --disagree: hsl(0, 70%, 50%);         

  /* Form container */
  --form: hsl(0, 0%, 94%);                

  /* Accent & utility (for highlights or borders) */
  --accent: hsl(200, 50%, 50%);
  --border: hsl(0, 0%, 80%);
  --shadow: hsla(0, 0%, 0%, 0.15);
}

:root[data-theme="dark"] {
  /* Base colors */
  --text: hsl(0, 0%, 95%);                
  --background: hsl(0, 0%, 6%);           

  /* Button (unique floating/up button) */
  --upbutton: hsl(210, 90%, 60%);        

  /* Card backgrounds */
  --card: hsl(10, 10%, 55%);              

  /* Action buttons inside cards */
  --agree: hsl(120, 40%, 35%);          
  --disagree: hsl(0, 60%, 45%);           

  /* Form container */
  --form: hsl(10, 10%, 45%);             

  /* Accent & utility (for highlights or borders) */
  --accent: hsl(200, 60%, 55%);
  --border: hsl(0, 0%, 25%);
  --shadow: hsla(0, 0%, 0%, 0.5);
}

/* 
--success: hsl(120, 45%, 45%);
--warning: hsl(40, 90%, 55%);
--error: hsl(0, 70%, 55%);
--info: hsl(200, 70%, 55%);
--muted-text: hsl(0, 0%, 50%); */
