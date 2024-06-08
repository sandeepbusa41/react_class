1.unmountingphase-component will be deleted from the DOM
2.to avoid memory leaks we use ComponetWillUnmount()   method
3.Pure Component are used to avoid child rerendering even though no changes is done in child component ,
   we can acheive by creating class which extends from PureComponet instead of Component
   ex:
     class Child extends PureComponent{
        
     }