/**
 * Created by yann on 24/01/17.
 */
import React from 'react';

class Stats extends React.Component {

  render() {
    return (
      <div>
        PvBase:<br />
        <input name="PvBase" value={this.props.stats.pvBase}/>
        <br />pvAdd:<br />
        <input name="pvAdd" value={this.props.stats.pvAdd}/>
        <br />attackBase:<br />
        <input name="attackBase" value={this.props.stats.attackBase}/>
        <br />defenseBase:<br />
        <input name="defenseBase" value={this.props.stats.defenseBase}/>
        <br />defenseAdd:<br />
        <input name="defenseAdd" value={this.props.stats.defenseAdd}/>
        <br />attackSpecialBase:<br />
        <input name="attackSpecialBase" value={this.props.stats.attackSpecialBase}/>
        <br />attackSpecialAdd:<br />
        <input name="attackSpecialAdd" value={this.props.stats.attackSpecialAdd}/>
        <br />defenseSpecialBase:<br />
        <input name="defenseSpecialBase" value={this.props.stats.defenseSpecialBase}/>
        <br />vitesseBase:<br />
        <input name="vitesseBase" value={this.props.stats.vitesseBase}/>
        <br />vitesseAdd:<br />
        <input name="vitesseAdd" value={this.props.stats.vitesseAdd}/>
      </div>
    );
  }

}

export default Stats;
