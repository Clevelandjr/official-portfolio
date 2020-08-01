import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div className="sg-container sg-about">
                <h3 className="ms-font-m-plus ms-fontSize-xl ms-textAlignCenter">About Cleveland</h3>
                <section className="sg-social ms-textAlignCenter">
                    <a
                        onClick={this.props.setHome}
                        href="/#/"><i className="fas fa-home" /></a>
                </section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin maximus finibus. Nam auctor ut lorem egestas mattis. Etiam volutpat libero id sapien venenatis pulvinar. Proin quis elementum purus. Phasellus nunc sem, ultrices id finibus sed, finibus blandit erat. In non mollis nunc, sit amet volutpat ipsum. Pellentesque ac dignissim nibh. Nulla sed mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque faucibus, lectus ac vestibulum dictum, urna elit facilisis justo, ac consequat quam libero id augue. Vivamus nisi eros, tempor eu erat sodales, consectetur volutpat nulla.</p>
                <p>Vestibulum eu tellus viverra, pharetra diam vitae, ultricies quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis congue, felis at suscipit consectetur, ex neque suscipit dolor, eget auctor nisi erat quis mi. Aenean nec nisi accumsan, luctus ex at, sollicitudin massa. Suspendisse in tortor quis urna bibendum cursus. Cras dictum nunc urna, sed tempor dui tempus nec. Donec eu lorem dictum, ultrices arcu at, ultrices ligula. Maecenas sapien dui, venenatis nec leo eu, consectetur eleifend lacus. Donec sodales vitae odio non dignissim. Suspendisse potenti. Integer rhoncus sed ipsum vel aliquam.</p>
            </div>
        )
    }
}

export default About;