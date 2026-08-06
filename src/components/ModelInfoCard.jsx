import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export default function ModelInfoCard() {
  return (
    <div className="model-info-card" style={{
      background: 'rgba(10, 10, 10, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--c-cyan)', // سيتغير اللون تلقائياً إذا ربطته بالثيم
      padding: '20px',
      borderRadius: '8px',
      color: 'white',
      maxWidth: '420px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      <div className="section-tag" style={{ marginBottom: '10px', fontSize: '0.8rem', letterSpacing: '1.5px', color: 'var(--c-cyan)' }}>
        &mdash; THEORETICAL BASIS
      </div>
      
      <h3 style={{ fontFamily: 'var(--font-mono)', margin: '0 0 10px 0' }}>Nanoscale MOSFET</h3>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
        Simulation of charge transport and channel pinch-off in a Field-Effect Transistor at the nanometer scale.
      </p>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '15px 0' }} />
      
      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Governing Equation (Saturation Region):</span>
      
      {/* عرض معادلة الترانزيستور */}
      <div style={{ margin: '15px 0', padding: '15px 10px', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', overflowX: 'auto' }}>
         <BlockMath math="I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2" />
      </div>

      {/* شرح المتغيرات باحترافية */}
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
        Where <InlineMath math="I_D" /> is the drain current, <InlineMath math="\mu_n" /> is the carrier mobility, <InlineMath math="C_{ox}" /> is the gate oxide capacitance, and <InlineMath math="V_{TH}" /> is the threshold voltage.
      </p>
    </div>
  );
}