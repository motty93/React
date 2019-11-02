import React from 'react';

class LikeButton extends React.Component {
  state = {
    hovered: false
  }

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },

      like: {
        display: "inline-block",
        background: "#3b5998",
        padding: "0px 5px",
        borderRadius: 2,
        color: "#ffffff",
        cursor: "pointer",
        float: "left",
        height: 20,
        lineHeight: "20px"
      },

      likeHover: {
        background: "#444"
      },

      counterBefore: {
        display: "block",
        float: "left",
        width: 6,
        height: 6,
        background: "#fafafa",
        marginLeft: "-12px",
        borderRight: 10,
        transform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        marginTop: 6,
        borderLeft: "1px solid #aaa",
        borderBottom: "1px solid #aaa"
      },

      counter: {
        display: "block",
        background: "#fafafa",
        boxSizing: "border-box",
        border: "1px solid #aaa",
        float: "left",
        padding: "0px 8px",
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: "20px"
      }
    };
  }

  onMouseEnter = () => this.setState({hovered: true});
  onMouseLeave = () => this.setState({hovered: false});

  render() {
    const styles = this.styles();
    // 状態に応じてスタイルを変更する
    const likeStyle = this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;
    return (
      <span style={styles.container}>
        <h1>Reactで作った「いいねボタン」のデモ（Flux不使用）</h1>
        <span
          style={likeStyle}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}>いいね！</span>
        <span style={styles.counter}>
          <span style={styles.counterBefore}>{" "}</span>999
        </span>
      </span>
    );
  }
}

export default LikeButton;
