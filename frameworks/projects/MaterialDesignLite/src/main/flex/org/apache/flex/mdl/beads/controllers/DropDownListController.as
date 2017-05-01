////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
package org.apache.flex.mdl.beads.controllers
{
	import org.apache.flex.core.IBeadController;
    import org.apache.flex.core.ISelectionModel;
    import org.apache.flex.core.IStrand;
    import org.apache.flex.events.IEventDispatcher;
    import org.apache.flex.mdl.beads.views.DropDownListView;
    import org.apache.flex.events.Event;
    import org.apache.flex.events.MouseEvent;

	/**
	 *  The DropDownListController class bead handles mouse events on the
     *  drop down list (org.apache.flex.mdl.Menu) component parts and
     *  dispatches change event on behalf of the DropDownList
	 *  
	 *  @langversion 3.0
	 *  @playerversion Flash 10.2
	 *  @playerversion AIR 2.6
	 *  @productversion FlexJS 0.8
	 */
	public class DropDownListController implements IBeadController
	{
		/**
		 *  constructor.
		 *  
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion FlexJS 0.8
		 */
		public function DropDownListController()
		{
		}
		
        /**
         *  Model
         *   
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion FlexJS 0.8
         */
		private var _model:ISelectionModel;
        private var _dropDownListView:DropDownListView;

		private var _strand:IStrand;

		/**
		 *  @copy org.apache.flex.core.IBead#strand
		 *  
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion FlexJS 0.8
		 */
		public function set strand(value:IStrand):void
		{
			_strand = value;

            _model = _strand.getBeadByType(ISelectionModel) as ISelectionModel;
            _dropDownListView = value.getBeadByType(DropDownListView) as DropDownListView;

            _dropDownListView.displayList.addEventListener(MouseEvent.CLICK, onDisplayItemClick);
		}

        private function onDisplayItemClick(event:MouseEvent):void
        {
			var eventTarget:Object = event.target;
			
			_model.selectedIndex = eventTarget.index;
			_model.selectedItem = eventTarget.data;

            _dropDownListView.displayLabel.text = !_model.labelField ? 
					eventTarget.data : 
					eventTarget.data[_model.labelField];

			IEventDispatcher(_strand).dispatchEvent(new Event(Event.CHANGE));
        }
    }
}
