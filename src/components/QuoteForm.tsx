'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { site, replyTime } from '@/content/site';

type Field = 'name' | 'email' | 'phone' | 'message';
const fields: {name: Field; label: string; type: string; autoComplete?: string}[] = [
  {name:'name',label:'Name',type:'text',autoComplete:'name'},
  {name:'email',label:'Email',type:'email',autoComplete:'email'},
  {name:'phone',label:'Phone',type:'tel',autoComplete:'tel'},
];
/** Design preview only. Delivery and CAPTCHA are owned by the handoff dev team. */
export default function QuoteForm({ initialProductType = '', service }: { initialProductType?: string; service?: string } = {}){
  const id = useId();
  const [productType,setProductType]=useState(initialProductType);
  const [errors,setErrors]=useState<Partial<Record<Field,string>>>({});
  const [status,setStatus]=useState('');
  const summary=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const type=new URLSearchParams(window.location.search).get('type');
    setProductType(type==='private-label'||type==='white-label'?'White label':type==='custom'?'Custom':type==='blister'?'Blister':initialProductType);
  },[initialProductType]);
  const invalid=(name:Field)=>Boolean(errors[name]);
  return <form id="project-details" className="quote-form" noValidate onSubmit={event=>{
    event.preventDefault();
    const data=new FormData(event.currentTarget), next:Partial<Record<Field,string>>={};
    if(!String(data.get('name')??'').trim()) next.name='Enter your name.';
    const email=String(data.get('email')??'').trim();
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email='Enter a valid email address.';
    if(!String(data.get('phone')??'').trim()) next.phone='Enter your phone number.';
    if(!String(data.get('message')??'').trim()) next.message='Tell us what you would like to make.';
    setErrors(next); setStatus('');
    if(Object.keys(next).length){requestAnimationFrame(()=>summary.current?.focus());return;}
    // Developer handoff: implement delivery, CAPTCHA and server validation.
    // Existing live form: POST https://www.privatelabelnutra.com/thank_you.php
    // Existing fields: first_name, email, phn, msg, g-recaptcha-response,
    // submit_btn. Include optional project details in msg if reusing it.
    // Do not show a sent/success state until the destination confirms delivery.
    setStatus('Your request has not been sent. Please call our sales team or use our current contact form to send it.');
  }}>
    {service && <input type="hidden" name="service" value={service}/>}
    <p className="form-note full">Four required details to start. Share a formula, artwork or packaging requirements if you have them.</p>
    <div className="form-errors full" aria-live="assertive" aria-atomic="true" ref={summary} tabIndex={-1}>
      {Object.keys(errors).length>0&&<><p>Please check the following details:</p><ul>{Object.entries(errors).map(([field,message])=><li key={field}><a href={`#${id}-${field}`}>{message}</a></li>)}</ul></>}
    </div>
    {fields.map(field=><div className="quote-field" key={field.name}><label htmlFor={`${id}-${field.name}`}>{field.label} *</label><input id={`${id}-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required maxLength={field.name==='email'?254:160} aria-invalid={invalid(field.name)} aria-describedby={invalid(field.name)?`${id}-${field.name}-error`:undefined}/>{errors[field.name]&&<span className="field-error" id={`${id}-${field.name}-error`}>{errors[field.name]}</span>}</div>)}
    <div className="quote-field full"><label htmlFor={`${id}-message`}>What would you like to make? *</label><textarea id={`${id}-message`} name="message" required rows={4} maxLength={6000} placeholder="Tell us your product, formula and packaging needs. We can help with your formula, artwork, or both." aria-invalid={invalid('message')} aria-describedby={`${id}-message-help${invalid('message')?` ${id}-message-error`:''}`}/><span className="field-help" id={`${id}-message-help`}>Estimated quantity and target launch date are helpful, if you know them.</span>{errors.message&&<span className="field-error" id={`${id}-message-error`}>{errors.message}</span>}</div>
    <details className="quote-options full"><summary>Add more project details <span>(optional)</span></summary><div className="optional-fields"><label>Company<input name="company" autoComplete="organization" maxLength={160}/></label><label>Product type<select name="productType" value={productType} onChange={event=>setProductType(event.target.value)}><option value="">Choose a type</option><option>White label</option><option>Custom</option><option>Blister</option></select></label><label>Estimated quantity<input name="quantity" type="number" min="1"/></label><label>Target launch date<input name="launchDate" type="date"/></label><label>Do you have a formula?<select name="formula" defaultValue="Not sure yet"><option>Not sure yet</option><option>Yes</option><option>No</option></select></label><label>Do you have artwork?<select name="artwork" defaultValue="Not sure yet"><option>Not sure yet</option><option>Yes</option><option>No</option></select></label></div></details>
    <div className="form-actions full"><button type="submit" className="button">Get a Quote</button><a className="text-link" href={site.phoneHref}>Call {site.phone}</a></div>
    <p className="reply-time full">{replyTime}</p>
    <div role="status" aria-live="polite" className="quote-status full">{status&&<><p>{status}</p><a className="text-link" href="https://www.privatelabelnutra.com/#contact">Use our current contact form</a></>}</div>
  </form>;
}
